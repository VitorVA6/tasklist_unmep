import { Task } from '../../entities/task';

export interface IGetAllTasks{
  execute: () => Promise<Task[]>
}