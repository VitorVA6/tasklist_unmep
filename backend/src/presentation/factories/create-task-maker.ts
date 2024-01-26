import { CreateTask } from "../../application/services/create-task";
import { TaskValidator } from "../../application/utils/task-validator";
import { MongoTaskRepository } from "../../infra/mongodb/task-repository";
import { CreateTaskController } from "../controllers/create-task";

export default function createTaskMaker(){
  const taskValidator = new TaskValidator();
  const taskRepository = new MongoTaskRepository();
  const createTaskService = new CreateTask(taskRepository, taskValidator);
  return new CreateTaskController(createTaskService);
}