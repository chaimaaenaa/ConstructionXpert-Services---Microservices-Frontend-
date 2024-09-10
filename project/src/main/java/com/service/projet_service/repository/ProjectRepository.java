package com.service.projet_service.repository;

import com.service.projet_service.model.Project;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

@Repository
public interface ProjectRepository extends JpaRepository<Project, Integer> {
    @Modifying
    @Transactional
    @Query("DELETE FROM Project p WHERE p.projectName = ?1")
    void deleteProjectByName(String project_name);
}
