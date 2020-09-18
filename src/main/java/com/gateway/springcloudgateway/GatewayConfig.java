package com.gateway.springcloudgateway;


import org.springframework.cloud.gateway.route.RouteLocator;
import org.springframework.cloud.gateway.route.builder.RouteLocatorBuilder;
import org.springframework.cloud.netflix.hystrix.EnableHystrix;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@EnableHystrix
@Configuration
public class GatewayConfig {


    @Bean
    public RouteLocator myRoutes(RouteLocatorBuilder builder) {
        return builder.routes()
                .route(p -> p
                        .path("/api")
//                        .filters(f -> f.addRequestHeader("Totally", "Epic"))
                        .uri("http://localhost:8081"))
//                .route(p -> p
//                        .host("*")
//                        .filters(f -> f.requestRateLimiter(c -> c.setRateLimiter()))
                        .build();
    }


}
