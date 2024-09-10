package com.service.task_service.feignClient;
import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;

@FeignClient(name = "project", url = "http://localhost:8090")
public interface ProjectClient {
    @GetMapping("/api/project/get_project_by_id/{project_id}")
    Project getProjectById(@PathVariable Long project_id);

}

