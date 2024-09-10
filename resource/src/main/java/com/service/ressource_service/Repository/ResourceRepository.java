package com.service.ressource_service.Repository;

import com.service.ressource_service.model.Resource;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface ResourceRepository extends JpaRepository<Resource, Integer> {
    @Query(value = "select * from resource where task_id=?", nativeQuery = true)
    List<Resource> getAllResourceByTaskId(Integer taskId);
}
