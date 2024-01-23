import { IDeleteTask } from "../../../domain/use-cases/task/delete";
import { TaskRepository } from "../../contracts/repositories/task-repository";
import { IdValidator } from "../../contracts/utils/id-validator";

export class DeleteTask implements IDeleteTask{
  constructor(
    private readonly taskRepository: TaskRepository,
    private readonly idValidator: IdValidator,
  ){}

  async execute(id: unknown): Promise<void>{
    const validatedId = this.idValidator.validate(id);
    await this.taskRepository.delete(validatedId);
  }
}