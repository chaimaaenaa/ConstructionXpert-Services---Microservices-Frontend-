// src/app/models/resource.model.ts
export interface Resource {
  id: number;
  name: string;
  type: ResourceType;
  quantity: number;
  unit: string;
}

// Enum pour les types de ressources
export enum ResourceType {
  MATERIAL = 'Material',
  EQUIPMENT = 'Equipment',
  PERSONNEL = 'Personnel'
}
