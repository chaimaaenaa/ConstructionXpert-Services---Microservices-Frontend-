import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {Resource} from "../models/ressource";


@Injectable({
  providedIn: 'root'
})
export class RessourceService {

  constructor(private http:HttpClient) { }


  private apiUrl = "http://localhost:8765/api/Ressource";



 // Create Ressource
 createRessource(ressource: Resource, idTache: number): Observable<Resource> {
  return this.http.post<Resource>(`${this.apiUrl}/${idTache}`, ressource);
}

// Get Ressource by ID
getRessourceById(id: number): Observable<Resource> {
  return this.http.get<Resource>(`${this.apiUrl}/${id}`);
}

// Get all Ressources
getAllRessources(): Observable<Resource[]> {
  return this.http.get<Resource[]>(this.apiUrl);
}

// Edit Ressource by ID
editRessource(id: number, updateData: Resource): Observable<Resource> {
  return this.http.put<Resource>(`${this.apiUrl}/${id}`, updateData);
}

// Delete Ressource by ID
deleteRessource(id: number): Observable<void> {
  return this.http.delete<void>(`${this.apiUrl}/${id}`);
}

// Delete all Ressources by Task ID
deleteRessourcesByTaskId(taskId: number): Observable<void> {
  return this.http.delete<void>(`${this.apiUrl}/tache/${taskId}`);
}







}
