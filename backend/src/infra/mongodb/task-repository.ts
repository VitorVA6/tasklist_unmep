import { TaskRepository } from "../../application/contracts/repositories/task-repository";
import { Task } from "../../domain/entities/task";
import TaskModel from "./task-model";

export class MongoTaskRepository implements TaskRepository{
  async create(task: Omit<Task, "id">): Promise<Task>{
    const newTask = await TaskModel.create(task);
    return newTask;
  }

  async update(task: Task): Promise<Task | null>{
    const updatedTask = await TaskModel.findOneAndUpdate({_id: task.id}, task);
    return updatedTask;
  }

  async delete(id: string): Promise<void>{
    await TaskModel.findOneAndDelete({_id: id});
  }

  async find(): Promise<Task[]>{
    const tasks = await TaskModel.find({});
    return tasks;
  }
}