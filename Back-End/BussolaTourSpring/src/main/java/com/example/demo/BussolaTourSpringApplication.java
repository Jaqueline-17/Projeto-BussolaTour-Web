package com.example.demo;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.domain.EntityScan;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;

@EntityScan(basePackages = {"com.cadastro.model"})
@EnableJpaRepositories(basePackages = {"com.cadastro.repositories"})
@ComponentScan(basePackages = {"com.cadastro.controller", "com.cadastro.service.impl, com.cadastro.service"})
@SpringBootApplication
public class BussolaTourSpringApplication {

	public static void main(String[] args) {
		SpringApplication.run(BussolaTourSpringApplication.class, args);
	}

}
