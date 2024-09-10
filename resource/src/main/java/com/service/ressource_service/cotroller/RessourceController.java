package com.service.ressource_service.cotroller;

import com.service.ressource_service.model.Resource;
import com.service.ressource_service.service.ResourceService;
import jakarta.persistence.criteria.CriteriaBuilder;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/resource")
public class RessourceController {

    @Autowired
    private ResourceService resourceService;

    @PostMapping("add_ressource")
    public Resource addressource(@RequestBody Resource resource) {
       Resource resource1= resourceService.addResource(resource);
        return resource1;
    }
    @GetMapping("get_all_resources/{task_id}")
    public List<Resource> getAllResources(@PathVariable Integer task_id) {
        return resourceService.getAllResourcesByTaskId(task_id);
    }
    @DeleteMapping("/delete_resource/{id}")
    public String deleteResource(@PathVariable Integer id) {
        resourceService.deleteResource(id);
        return "resource was deleted";
    }

    @PutMapping("/update_resource/{id}")
    public Resource updateResource(@PathVariable Integer id, @RequestBody Resource resource) {
        return resourceService.updateResource(resource,id);

    }





    @GetMapping("/resource")
    public String string() {
        return "Hello ressource";
    }
}
