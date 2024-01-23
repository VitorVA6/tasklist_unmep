import { Task } from '../../../domain/entities/task';

export interface TaskRepository{
  create: (task: Omit<Task, 'id'>) => Promise<Task>
  update: (task: Task) => Promise<Task>
  delete: (id: string) => Promise<void>
  find: () => Promise<Task[]>
//findById: (id: string) => Promise<Task>
}