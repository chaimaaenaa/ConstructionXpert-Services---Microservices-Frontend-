package com.service.projet_service.service;

import com.service.projet_service.model.Project;
import com.service.projet_service.repository.ProjectRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ProjectService {

    @Autowired
    private ProjectRepository projectRepository;

    public Project addProject(Project project) {
        return projectRepository.save(project);
    }

    public void deleteProject(String projectName) {
        projectRepository.deleteProjectByName(projectName);
    }
    public List<Project> getAllProjects() {
        return projectRepository.findAll();
    }

    public void deleteProjectById(Integer id) {
        projectRepository.deleteById(id);
    }

    public Project getProjectById(int id) {
        return projectRepository.findById(id).get();
    }
    public Project updateProject(Project project,Integer id) {
        Project oldProject = projectRepository.findById(id).get();
        oldProject.setProjectName(project.getProjectName());
        oldProject.setProjectDescription(project.getProjectDescription());
        oldProject.setProjectStartDate(project.getProjectStartDate());
        oldProject.setProjectEndDate(project.getProjectEndDate());
        oldProject.setProjectCost(project.getProjectCost());
        return projectRepository.save(oldProject);

    }


}
