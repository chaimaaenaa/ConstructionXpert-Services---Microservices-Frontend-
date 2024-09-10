package com.service.ressource_service.feignClient;
import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;

@FeignClient(name = "task", url = "http://localhost:8081")
public interface ProjectClient {
    @GetMapping("/api/task/get_task_by_id/{task_id}")
    Task getTaskById(@PathVariable Long task_id);

}

