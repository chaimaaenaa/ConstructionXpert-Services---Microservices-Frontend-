// src/app/models/user.model.ts

export interface User {
  id: number;
  username: string;
  email: string;
  password?: string; // Le mot de passe peut être omis lors de la récupération des informations de l'utilisateur
  firstName?: string;
  lastName?: string;
  roles: string[]; // Liste des rôles ou des permissions de l'utilisateur
  isActive: boolean;
  createdDate: Date;
  lastLoginDate?: Date; // Optionnel : date de la dernière connexion
}
