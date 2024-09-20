package com.ConstructionXpert.ServiceProjets.Config;

import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.PathVariable;

@FeignClient(name = "task-service", url = "http://localhost:8083/api/tasks")
public interface TaskClient {

    @DeleteMapping("/{id}")
    ResponseEntity<Void> deleteTaskByIdProjet(@PathVariable Long id);


}
