// src/app/models/task.model.ts
export interface Task {
  id: number;
  title: string;
  description?: string; // optionnel
  dueDate: Date;
  status: TaskStatus;
  assignedTo?: number; // ID de l'utilisateur assigné (optionnel)
}

// Enum pour les statuts des tâches
export enum TaskStatus {
  PENDING = 'Pending',
  IN_PROGRESS = 'In Progress',
  COMPLETED = 'Completed',
  CANCELLED = 'Cancelled'
}
