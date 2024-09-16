import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Projet } from 'src/app/models/projet';
import { Task } from 'src/app/models/task';
import { ProjetService } from 'src/app/services/projet.service';
import { TaskService } from 'src/app/services/task.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  taskForm!: FormGroup;
  projects: Projet[] = [];

  constructor(
    private fb: FormBuilder,
    private projetService: ProjetService,
    private taskService: TaskService,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.taskForm = this.fb.group({
      description: ['', Validators.required],
      startDate: ['', Validators.required],
      endDate: ['', Validators.required],
      status: ['', Validators.required],
      projectId: [null, Validators.required]
    });

    this.projetService.getProjets().subscribe((projects: Projet[]) => {
      this.projects = projects;
    });
  }

  addTask(): void {
    if (this.taskForm.valid) {
      const newTask: Task = this.taskForm.value;
      this.taskService.createTask(newTask, newTask.projectId).subscribe(()  => {
        console.log('Task added successfully!');
        this.location.back();
      });
    }
  }
}
