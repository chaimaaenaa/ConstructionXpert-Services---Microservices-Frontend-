package com.service.task_service.model;

import com.service.task_service.enums.Taskstatus;
import com.service.task_service.feignClient.Project;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.sql.Date;

@NoArgsConstructor
@AllArgsConstructor
@Setter
@Getter
@Entity
public class Task {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer taskId;
    private String taskName;
    private String taskDescription;
    private Date taskStart;
    private Date taskEnd;
    @Enumerated(EnumType.STRING)
    private Taskstatus taskStatus;

    private Long project_id;
    @Transient
    private Project project;
}
