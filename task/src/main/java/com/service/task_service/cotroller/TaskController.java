package com.service.task_service.cotroller;

import com.service.task_service.model.Task;
import com.service.task_service.service.TaskService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/task")
public class TaskController {


    @Autowired
    private TaskService taskService;

    @PostMapping("/add_task")
    public Task addTask(@RequestBody Task task) {
        return taskService.addTask(task);
    }

    @GetMapping("get_all_task/{project_id}")
    public List<Task> getAllTasks(@PathVariable Integer project_id) {
        return taskService.getTaskByProjectId(project_id);
    }
    @DeleteMapping("/delete_task/{id}")
    public String deleteTask(@PathVariable Integer id) {
        taskService.deleteTask(id);
        return "task with id " + id + " deleted";
    }
    @GetMapping("/get_task_by_id/{task_id}")
    public Task getTaskById(@PathVariable Integer task_id) {
        return taskService.getTaskById(task_id);
    }
    @PutMapping("update_task/{id}")
    public Task updateTask(@PathVariable Integer id, @RequestBody Task task) {
        return taskService.updateTask(task,id);
    }


}
