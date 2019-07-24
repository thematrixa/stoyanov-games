package com.gorchovski.stoyanovgames;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.builder.SpringApplicationBuilder;
import org.springframework.boot.web.servlet.support.SpringBootServletInitializer;
import org.springframework.context.annotation.Configuration;
import org.springframework.scheduling.annotation.EnableScheduling;
import org.springframework.web.servlet.config.annotation.EnableWebMvc;

import it.ozimov.springboot.mail.configuration.EnableEmailTools;

@Configuration
@EnableWebMvc
@EnableEmailTools
@SpringBootApplication
@EnableScheduling
public class StoyanovgamesApplication extends SpringBootServletInitializer {
	
    @Override
    protected SpringApplicationBuilder configure(SpringApplicationBuilder application) {
        return application.sources(StoyanovgamesApplication.class);
    }
	public static void main(String[] args) {
		SpringApplication.run(StoyanovgamesApplication.class, args);
	}

}
