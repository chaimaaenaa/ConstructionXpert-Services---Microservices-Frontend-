package com.ConstructionXpert.ServiceProjets;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.openfeign.EnableFeignClients;
import org.springframework.cloud.openfeign.FeignClient;

@EnableFeignClients
@SpringBootApplication
public class ServiceGestionProjetsApplication {

	public static void main(String[] args) {
		SpringApplication.run(ServiceGestionProjetsApplication.class, args);
	}

}
