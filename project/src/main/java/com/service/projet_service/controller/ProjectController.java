package com.service.projet_service.controller;

import com.service.projet_service.model.Project;
import com.service.projet_service.service.ProjectService;
import jakarta.annotation.security.RolesAllowed;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/project")
public class ProjectController {

    @Autowired
    private ProjectService projectService;



    @PostMapping("/add_project")
    public String addProject(@RequestBody Project project) {
        projectService.addProject(project);
        return "Project added";
    }

    @DeleteMapping("/delete_project")
    public String deleteProject(@RequestParam("projectName") String projectName) {
        projectService.deleteProject(projectName);
        return "Project deleted";
    }
    @DeleteMapping("/delete_project_by_id/{id}")
    public String deleteProjectById(@PathVariable Integer id) {
        projectService.deleteProjectById(id);
        return "Project deleted";
    }

    @GetMapping("get_project_by_id/{id}")
    public Project getProjectById(@PathVariable Integer id){
        return projectService.getProjectById(id);
    }


    @GetMapping("get_all_project")
    public List<Project> getAllProject() {
        return projectService.getAllProjects();
    }


    @PutMapping("/update_project/{id}")
    public String updateProject(@RequestBody Project project, @PathVariable int id) {
        projectService.updateProject(project,id);
        return "Project updated";
    }

}
