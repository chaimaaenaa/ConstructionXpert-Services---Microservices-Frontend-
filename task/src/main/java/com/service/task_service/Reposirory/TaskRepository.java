package com.service.task_service.Reposirory;

import com.service.task_service.model.Task;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface TaskRepository extends JpaRepository<Task, Integer> {
    @Query(value = "select * from task where project_id=?" , nativeQuery = true)
    List<Task> findByProjectId(Integer project_id);
}
