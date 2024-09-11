import { Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { TasksComponent } from './components/tasks/tasks.component';
import { AdminDashboardComponent } from './components/admin-dashboard/admin-dashboard.component';
import { AdminGuard } from './guards/admin.guard';

export const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },  // Redirect to login page by default
  { path: 'login', component: LoginComponent },            // Route for login
  { path: 'dashboard', component: DashboardComponent },    // Route for user dashboard
  { path: 'projects', component: ProjectsComponent },      // Route for projects
  { path: 'tasks', component: TasksComponent },            // Route for tasks
  { path: 'admin', component: AdminDashboardComponent, canActivate: [AdminGuard] }, // Route for admin dashboard with AdminGuard
];
