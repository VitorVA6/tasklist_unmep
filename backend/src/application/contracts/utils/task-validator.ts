import { Task } from "../../../domain/entities/task";

export interface TaskValidator{
  validate: (task: unknown) => Omit<Task, 'id'>
}