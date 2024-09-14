// auth.service.ts
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Jwt } from '../models/Jwt';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { JwtHelperService } from '@auth0/angular-jwt';
import { LoginData } from '../models/LoginData';
import { RegisterData } from '../models/RegisterData';
import { tap } from 'rxjs/operators';  // Import tap

@Injectable({
  providedIn: 'root'
})
export class AuthService {
<<<<<<< HEAD

  private BASE_URL = "http://localhost:8765/api/v1/auth";
  private readonly TOKEN_KEY = 'jwt';
  private readonly ROLE_KEY = 'role';
=======
  private apiUrl = 'http://localhost:8084/api/users';
>>>>>>> 8b4f91577acdf1381a21e90c50dae9c0bb41ac2d

  constructor(
    private http: HttpClient,
    private router: Router,
    private jwtHelper: JwtHelperService
  ) {}

<<<<<<< HEAD
  register(registerdata: RegisterData): Observable<Jwt> {
    return this.http.post<Jwt>(`${this.BASE_URL}/register`, registerdata);
  }

  login(logindata: LoginData): Observable<Jwt> {
    return this.http.post<Jwt>(`${this.BASE_URL}/authenticate`, logindata).pipe(
      tap((response: Jwt) => {
        if (response && response.token) {
          localStorage.setItem(this.TOKEN_KEY, response.token);
          localStorage.setItem(this.ROLE_KEY, response.role);
        }
      })
    );
  }

  logout(): void {
    localStorage.removeItem(this.ROLE_KEY);
    localStorage.removeItem(this.TOKEN_KEY);
    this.router.navigate(['/login']);
  }

  isAuthenticated(): boolean {
    const token = localStorage.getItem(this.TOKEN_KEY);
    return token != null && !this.jwtHelper.isTokenExpired(token);
  }

  getToken(): string | null {
    return localStorage.getItem(this.TOKEN_KEY);
  }

  getRole(): string | null {
    return localStorage.getItem(this.ROLE_KEY);
=======
  register(user: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/register`, user);
  }

  login(credentials: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/authenticate`, credentials);
  }
}

// project.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {
  private apiUrl = 'http://localhost:8765/api/projects';

  constructor(private http: HttpClient) { }

  getAllProjects(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }

  createProject(project: any): Observable<any> {
    return this.http.post(this.apiUrl, project);
  }

  updateProject(id: number, project: any): Observable<any> {
    return this.http.put(`${this.apiUrl}/${id}`, project);
  }

  deleteProject(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
}

// task.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  private apiUrl = 'http://localhost:8765/api/tasks';

  constructor(private http: HttpClient) { }

  getAllTasks(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }

  getTasksByProjectId(projectId: number): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/project/${projectId}`);
  }

  createTask(task: any): Observable<any> {
    return this.http.post(this.apiUrl, task);
  }

  updateTask(id: number, task: any): Observable<any> {
    return this.http.put(`${this.apiUrl}/${id}`, task);
  }

  deleteTask(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
}

// resource.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ResourceService {
  private apiUrl = 'http://localhost:8765/api/resources';

  constructor(private http: HttpClient) { }

  getAllResources(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }

  getResourcesByTaskId(taskId: number): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/Task/${taskId}`);
  }

  createResource(resource: any): Observable<any> {
    return this.http.post(this.apiUrl, resource);
  }

  updateResource(id: number, resource: any): Observable<any> {
    return this.http.put(`${this.apiUrl}/resource/${id}`, resource);
  }

  deleteResource(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`);
>>>>>>> 8b4f91577acdf1381a21e90c50dae9c0bb41ac2d
  }
}
