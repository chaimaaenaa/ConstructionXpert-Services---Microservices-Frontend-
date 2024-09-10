package com.service.ressource_service.service;

import com.service.ressource_service.Repository.ResourceRepository;
import com.service.ressource_service.feignClient.ProjectClient;
import com.service.ressource_service.feignClient.Task;
import com.service.ressource_service.model.Resource;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.List;

@Service
public class ResourceService {

@Autowired
private ResourceRepository resourceRepository;
@Autowired
private ProjectClient projectClient;


    public Resource addResource(Resource resource) {
        if(projectClient.getTaskById(resource.getTask_id()) != null){
            return resourceRepository.save(resource);

        }
        throw new RuntimeException("Project not found");

    }

    public List<Resource> getAllResourcesByTaskId(Integer taskId) {
        return resourceRepository.getAllResourceByTaskId(taskId);
    }

    public void deleteResource(Integer id) {
        resourceRepository.deleteById(id);
    }

    public Resource updateResource(Resource resource,Integer id) {

        Resource existingResource = resourceRepository.findById(id).get();
        existingResource.setResourceName(resource.getResourceName());
        existingResource.setResourceType(resource.getResourceType());
        existingResource.setQuantity(resource.getQuantity());
        existingResource.setProviderInformation(resource.getProviderInformation());
        return resourceRepository.save(existingResource);
    }
}
