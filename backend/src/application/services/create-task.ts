import { Task } from "../../domain/entities/task"; 
import { ICreateTask } from "../../domain/use-cases/create-task"; 
import { TaskRepository } from "../contracts/repositories/task-repository"; 
import { DataValidator } from "../contracts/data-validator"; 

export class CreateTask implements ICreateTask{
  constructor(
    private readonly taskRepository: TaskRepository,
    private readonly taskValidator: DataValidator<Omit<Task, "id">>
  ){}

  async execute(taskData: unknown): Promise<Task>{
    const task = this.taskValidator.validate(taskData);
    const newTask = await this.taskRepository.create(task);
    return newTask;
  }
}