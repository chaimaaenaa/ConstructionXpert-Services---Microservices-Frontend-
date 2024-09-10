package com.service.ressource_service.feignClient;

import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;
import jakarta.persistence.Transient;
import lombok.Data;

import java.sql.Date;

@Data
public class Task {

    private Integer taskId;
    private String taskName;
    private String taskDescription;
    private Date taskStart;
    private Date taskEnd;
    @Enumerated(EnumType.STRING)
    private Taskstatus taskStatus;

    private Long project_id;


}
