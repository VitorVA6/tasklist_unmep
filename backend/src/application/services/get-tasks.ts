import { Task } from "../../domain/entities/task"; 
import { IGetAllTasks } from "../../domain/use-cases/get-tasks"; 
import { TaskRepository } from "../contracts/repositories/task-repository"; 

export class GetAllTasks implements IGetAllTasks{
  constructor(
    private readonly taskRepository: TaskRepository
  ){}

  async execute(): Promise<Task[]>{
    const tasks = await this.taskRepository.find();
    return tasks;
  }
}