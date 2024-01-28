import { Task } from "../entities/task";

export interface IGetTask{
  execute: (id: unknown) => Promise<Task>
}