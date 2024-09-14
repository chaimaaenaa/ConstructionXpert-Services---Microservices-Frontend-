import { User } from './user.model';
import { Task } from './task.model';

export class Project {
  id: number;
  name: string;
  description: string;
  startDate: Date;
  endDate: Date;
  owner: User;
  members: User[];
  tasks: Task[];
  status: 'active' | 'completed' | 'on-hold';

  constructor(data: Partial<Project>) {
    Object.assign(this, data);
  }

  addMember(user: User) {
    if (!this.members.find(member => member.id === user.id)) {
      this.members.push(user);
    }
  }

  removeMember(userId: number) {
    this.members = this.members.filter(member => member.id !== userId);
  }

  addTask(task: Task) {
    this.tasks.push(task);
  }

  updateStatus(newStatus: 'active' | 'completed' | 'on-hold') {
    this.status = newStatus;
  }
}
