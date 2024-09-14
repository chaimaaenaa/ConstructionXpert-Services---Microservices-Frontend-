// projects.component.ts
import { Component, OnInit } from '@angular/core';
import { ProjectService } from '../../services/project.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  standalone: true,
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {
  projects: any[] = [];

  constructor(private projectService: ProjectService) { }

  ngOnInit(): void {
    this.loadProjects();
  }

  loadProjects(): void {
    this.projectService.getAllProjects().subscribe(
      (data) => {
        this.projects = data;
      },
      (error) => {
        console.error('Error loading projects:', error);
      }
    );
  }

  createProject(project: any): void {
    this.projectService.createProject(project).subscribe(
      (response) => {
        console.log('Project created successfully:', response);
        this.loadProjects(); // Reload the projects list
      },
      (error) => {
        console.error('Error creating project:', error);
      }
    );
  }

  // Add similar methods for update and delete
}
