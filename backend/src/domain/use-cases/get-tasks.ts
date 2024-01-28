import { Task } from '../entities/task';

export interface IGetAllTasks{
  execute: (interval: string) => Promise<Task[]>
}