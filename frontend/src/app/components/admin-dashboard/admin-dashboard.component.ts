import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { ProjectService } from '../../services/project.service';
@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.scss']
})
export class AdminDashboardComponent implements OnInit {
  numberOfUsers: number = 0;
  numberOfProjects: number = 0;

  constructor(private projectService: ProjectService, private authService: AuthService) {}

  ngOnInit(): void {
    this.getNumberOfUsers();
    this.getNumberOfProjects();
  }

  getNumberOfUsers(): void {
    this.authService.getUserCount().subscribe(count => {
      this.numberOfUsers = count;
    });
  }

  getNumberOfProjects(): void {
    this.projectService.getProjectCount().subscribe(count => {
      this.numberOfProjects = count;
    });
  }
}
