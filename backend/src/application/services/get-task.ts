import { TaskRepository } from "../contracts/repositories/task-repository"; 
import { DataValidator } from "../contracts/data-validator";
import { IGetTask } from "../../domain/use-cases/get-task";
import { Task } from "../../domain/entities/task";

export class GetTask implements IGetTask{
  constructor(
    private readonly taskRepository: TaskRepository,
    private readonly idValidator: DataValidator<string>,
  ){}

  async execute(id: unknown): Promise<Task>{
    const validatedId = this.idValidator.validate(id);
    const task = await this.taskRepository.findById(validatedId);
    if(!task) throw new Error("Tarefa não existe");
    return task;
  }
}