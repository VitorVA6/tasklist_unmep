import { TaskRepository } from "../../application/contracts/repositories/task-repository";
import { Task } from "../../domain/entities/task";
import TaskModel from "./task-model";

export class MongoTaskRepository implements TaskRepository{
  async create(task: Omit<Task, "id">): Promise<Task>{
    const newTask = await TaskModel.create(task);
    return {
      id: newTask._id.toString(),
      title: newTask.title,
      date: newTask.date,
      status: newTask.status,
      description: newTask.description
    };
  }

  async update(task: Task): Promise<Task | null>{
    const updatedTask = await TaskModel.findOneAndUpdate(
      {_id: task.id},
      task,
      {new: true}
    );
    if (!updatedTask) return null;
    return {
      id: updatedTask._id.toString(),
      title: updatedTask.title,
      date: updatedTask.date,
      status: updatedTask.status,
      description: updatedTask.description
    };
  }

  async delete(id: string): Promise<void>{
    await TaskModel.findOneAndDelete({_id: id});
  }

  async find(): Promise<Task[]>{
    const tasks = await TaskModel.find({});
    const tasksFormated = tasks.map(el => ({
      id: el._id.toString(),
      title: el.title,
      date: el.date,
      status: el.status,
      description: el.description
    }));
    return tasksFormated;
  }
}