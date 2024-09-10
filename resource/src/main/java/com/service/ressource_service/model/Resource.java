package com.service.ressource_service.model;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.springframework.scheduling.config.Task;

@NoArgsConstructor
@AllArgsConstructor
@Setter
@Getter
@Entity
public class Resource {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer resourceId;
    private String resourceName;
    private String resourceType;
    private int quantity;
    private String providerInformation;

    private Long task_id;

    @Transient
    private Task task;

}
