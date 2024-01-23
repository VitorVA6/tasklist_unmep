import { Task } from "../../../domain/entities/task";
import { IUpdateTask } from "../../../domain/use-cases/task/update";
import { TaskRepository } from "../../contracts/repositories/task-repository";
import { IdValidator } from "../../contracts/utils/id-validator";
import { TaskValidator } from "../../contracts/utils/task-validator";

export class UpdateTask implements IUpdateTask{
  constructor(
    private readonly taskRepository: TaskRepository,
    private readonly taskValidator: TaskValidator,
    private readonly idValidator: IdValidator,
  ){}

  async execute(id: unknown, taskData: unknown): Promise<Task>{
    const idValidated = this.idValidator.validate(id);
    const task = this.taskValidator.validate(taskData);
    const updatedTask = await this.taskRepository.update({
      id: idValidated,
      ...task
    });

    return updatedTask;
  }
}