import { Task } from "../../domain/entities/task"; 
import { IUpdateTask } from "../../domain/use-cases/update-task"; 
import { TaskRepository } from "../contracts/repositories/task-repository";
import { DataValidator } from "../contracts/data-validator"; 

export class UpdateTask implements IUpdateTask{
  constructor(
    private readonly taskRepository: TaskRepository,
    private readonly taskValidator: DataValidator<Omit<Task, "id">>,
    private readonly idValidator: DataValidator<string>,
  ){}

  async execute(id: unknown, taskData: unknown): Promise<Task>{
    const idValidated = this.idValidator.validate(id);
    const task = this.taskValidator.validate(taskData);
    const updatedTask = await this.taskRepository.update({
      id: idValidated,
      ...task
    });
    if(!updatedTask) throw new Error('Erro na atualização');
    return updatedTask;
  }
}