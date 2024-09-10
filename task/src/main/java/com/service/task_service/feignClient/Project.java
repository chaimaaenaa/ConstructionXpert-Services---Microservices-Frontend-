package com.service.task_service.feignClient;

import lombok.Data;

import java.sql.Date;

@Data
public class Project {

    private Integer projectId;
    private String projectName;
    private String projectDescription;
    private Date projectStartDate;
    private Date projectEndDate;
    private double projectCost;
}
