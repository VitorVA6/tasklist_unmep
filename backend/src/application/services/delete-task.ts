import { IDeleteTask } from "../../domain/use-cases/delete-task"; 
import { TaskRepository } from "../contracts/repositories/task-repository"; 
import { DataValidator } from "../contracts/data-validator";

export class DeleteTask implements IDeleteTask{
  constructor(
    private readonly taskRepository: TaskRepository,
    private readonly idValidator: DataValidator<string>,
  ){}

  async execute(id: unknown): Promise<void>{
    const validatedId = this.idValidator.validate(id);
    await this.taskRepository.delete(validatedId);
  }
}