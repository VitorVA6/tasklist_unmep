import { Task } from "../../../domain/entities/task";
import { ICreateTask } from "../../../domain/use-cases/task/create";
import { TaskRepository } from "../../contracts/repositories/task-repository";
import { TaskValidator } from "../../contracts/utils/task-validator";

export class CreateTask implements ICreateTask{
  constructor(
    private readonly taskRepository: TaskRepository,
    private readonly taskValidator: TaskValidator
  ){}

  async execute(taskData: unknown): Promise<Task>{
    const task = this.taskValidator.validate(taskData);
    const newTask = await this.taskRepository.create(task);
    return newTask;
  }
}