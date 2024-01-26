import { GetAllTasks } from "../../application/services/get-tasks";
import { MongoTaskRepository } from "../../infra/mongodb/task-repository";
import { GetAllTasksController } from "../controllers/get-all-tasks";

export default function getAllTasksMaker(){
  const taskRepository = new MongoTaskRepository();
  const getAllTaskService = new GetAllTasks(taskRepository);
  return new GetAllTasksController(getAllTaskService);
}