package com.gorchovski.stoyanovgames;

import java.io.IOException;
import java.util.List;

import javax.servlet.Filter;
import javax.servlet.FilterChain;
import javax.servlet.FilterConfig;
import javax.servlet.ServletException;
import javax.servlet.ServletRequest;
import javax.servlet.ServletResponse;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.boot.context.properties.ConfigurationProperties;
import org.springframework.core.Ordered;
import org.springframework.core.annotation.Order;
import org.springframework.stereotype.Component;

@Component
@Order(Ordered.HIGHEST_PRECEDENCE)
@ConfigurationProperties(prefix = "fb.cors.access")
public class CorsFilter implements Filter {

    private List<String> url;

    @Override
    public void doFilter(ServletRequest req, ServletResponse res, FilterChain chain) throws IOException, ServletException {
        HttpServletResponse response = (HttpServletResponse) res;
        HttpServletRequest request = (HttpServletRequest) req;

        String origin = request.getHeader("origin");
        if (allowedAccess(origin)) {
            response.setHeader("Access-Control-Allow-Origin", origin);
        }
        response.setHeader("Access-Control-Allow-Methods", "POST, GET, OPTIONS, DELETE");
        response.setHeader("Access-Control-Max-Age", "3600");
        response.setHeader("Access-Control-Allow-Headers",
                "content-type, accept, cache-control, x-requested-with, authorization, x-http-method-override, set-cookie, cookie, x-admin-resources, x-admin-client");
        response.setHeader("Access-Control-Allow-Credentials", "true");
        if (request.getRequestURI().contains("/resources") && !request.getRequestURI().contains("/resources/temporary")
                && request.getHeader("x-admin-resources") == null && request.getHeader("x-admin-client") == null) {
            response.setHeader("Cache-control", "private, max-age=200");
        } else {
            if (request.getHeader("x-admin-resources") != null || request.getHeader("x-admin-client") != null) {
                response.setHeader("Cache-control", "no-store, max-age=0, must-revalidate");
            } else {
                response.setHeader("Cache-control", "no-cache, max-age=0, must-revalidate");
            }
            response.setHeader("Expires", "0");
            response.setHeader("Pragma", "no-cache");
        }

        if (!request.getMethod().equals("OPTIONS")) {
            chain.doFilter(req, res);
        }
    }

    @Override
    public void init(FilterConfig filterConfig) {
    }

    @Override
    public void destroy() {
    }

    private boolean allowedAccess(String ref) {
        if (containsCaseInsensitive(url, ref)) {
            return true;
        }
        return false;
    }

    private boolean containsCaseInsensitive(List<String> list, String str) {
        return list.stream().anyMatch(s -> s.equalsIgnoreCase(str));
    }

    public List<String> getUrl() {
        return url;
    }

    public void setUrl(List<String> url) {
        this.url = url;
    }
}