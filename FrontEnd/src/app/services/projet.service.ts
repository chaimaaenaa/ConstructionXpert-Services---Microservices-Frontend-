import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpParams } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { Projet } from '../models/projet';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProjetService {

  // URL de l'API backend
  private apiUrl = 'http://localhost:8765/api/projects';

  constructor(private http: HttpClient) { }

  /**
   * Créer un nouveau projet
   * @param project Le projet à créer
   * @returns Observable<Projet>
   */
  createProject(project: Projet): Observable<Projet> {
    return this.http.post<Projet>(this.apiUrl, project)
      .pipe(
        catchError(this.handleError)
      );
  }

  /**
   * Récupérer un projet par son ID
   * @param id L'ID du projet
   * @returns Observable<Projet>
   */
  getProjectById(id: number): Observable<Projet> {
    return this.http.get<Projet>(`${this.apiUrl}/${id}`)
      .pipe(
        catchError(this.handleError)
      );
  }

  /**
   * Mettre à jour un projet existant
   * @param id L'ID du projet à mettre à jour
   * @param project Les données mises à jour du projet
   * @returns Observable<void>
   */
  updateProject(id: number, project: Projet): Observable<void> {
    return this.http.put<void>(`${this.apiUrl}/${id}`, project)
      .pipe(
        catchError(this.handleError)
      );
  }

  /**
   * Supprimer un projet
   * @param id L'ID du projet à supprimer
   * @returns Observable<void>
   */
  deleteProject(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`)
      .pipe(
        catchError(this.handleError)
      );
  }

  /**
   * Vérifier si un projet existe
   * @param id L'ID du projet
   * @returns Observable<boolean>
   */
  existProject(id: number): Observable<boolean> {
    return this.http.get<boolean>(`${this.apiUrl}/${id}/exist`)
      .pipe(
        catchError(this.handleError)
      );
  }

  /**
   * Récupérer tous les projets (non paginés)
   * @returns Observable<Projet[]>
   */
  getAllProjects(): Observable<Projet[]> {
    return this.http.get<Projet[]>(this.apiUrl)
      .pipe(
        catchError(this.handleError)
      );
  }

  /**
   * Récupérer les projets de manière paginée
   * @param page Le numéro de la page (0-indexé)
   * @param size La taille de la page
   * @returns Observable<any> (Page<Project>)
   */
  getPaginatedProjects(page: number, size: number): Observable<any> {
    let params = new HttpParams()
      .set('page', page.toString())
      .set('size', size.toString());
    return this.http.get<any>(`${this.apiUrl}/paginated`, { params })
      .pipe(
        catchError(this.handleError)
      );
  }

  /**
   * Rechercher des projets par mot-clé
   * @param keyword Le mot-clé de recherche
   * @returns Observable<Projet[]>
   */
  searchProjects(keyword: string): Observable<Projet[]> {
    let params = new HttpParams().set('query', keyword);
    return this.http.get<Projet[]>(`${this.apiUrl}/search`, { params })
      .pipe(
        catchError(this.handleError)
      );
  }

  /**
   * Gérer les erreurs HTTP
   * @param error L'erreur HTTP
   * @returns Observable<never>
   */
  private handleError(error: HttpErrorResponse): Observable<never> {
    // Log de l'erreur pour le débogage
    console.error(`Backend returned code ${error.status}, body was: ${error.error}`);

    // Message d'erreur personnalisé
    let errorMessage = 'Une erreur inconnue est survenue!';
    if (error.error instanceof ErrorEvent) {
      // Erreur côté client ou réseau
      errorMessage = `Une erreur côté client est survenue: ${error.error.message}`;
    } else {
      // Le backend a retourné un code d'erreur
      errorMessage = `Le serveur a retourné le code ${error.status}, message d'erreur: ${error.message}`;
    }

    // Retourne un observable avec un message d'erreur utilisateur
    return throwError(errorMessage);
  }
}
