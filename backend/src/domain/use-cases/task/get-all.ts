import { Task } from '../../entities/task';

export interface GetAllTasks{
  execute: () => Promise<Task[]>
}