package com.gorchovski.stoyanovgames.security;

import java.util.Arrays;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.web.cors.CorsConfiguration;
import org.springframework.web.cors.CorsConfigurationSource;
import org.springframework.web.cors.reactive.UrlBasedCorsConfigurationSource;

import com.gorchovski.stoyanovgames.service.UserDetailsServiceImpl;

@Configuration
@EnableWebSecurity
public class CustomWebSecurityConfigurerAdapter extends WebSecurityConfigurerAdapter {

    @Autowired private MyBasicAuthenticationEntryPoint authenticationEntryPoint;
    @Autowired
    private UserDetailsServiceImpl userDetailsService;

    @Bean
    public BCryptPasswordEncoder bCryptPasswordEncoder() {
        return new BCryptPasswordEncoder();
    }

    @Bean
    public AuthenticationManager customAuthenticationManager() throws Exception {
        return authenticationManager();
    }
    
    @Autowired
    public void configureGlobal(AuthenticationManagerBuilder auth) throws Exception {
        auth.userDetailsService(userDetailsService).passwordEncoder(bCryptPasswordEncoder());
          /*.inMemoryAuthentication()
          .withUser("user1")
          .password(passwordEncoder().encode("user1Pass"))
          .authorities("ROLE_USER");*/
    }

    @Override
    protected void configure(HttpSecurity http) throws Exception {
    	/*http
        .authorizeRequests()
            .antMatchers("/users/**")
            .permitAll();
           // .anyRequest().authenticated();/*.and()
           // .httpBasic()
            //.authenticationEntryPoint(authenticationEntryPoint);*/
            /*.and()
        .formLogin()
            .loginPage("/login")
            .permitAll()
            .and()
        .logout()
            .permitAll();*/
    	
    	http.csrf()
        .disable()
          .authorizeRequests()
          .antMatchers("/securityNone","/users/**")
          .permitAll()
          .anyRequest()
          .authenticated()
          .and()
          .httpBasic()
          .authenticationEntryPoint(authenticationEntryPoint);

    }
}