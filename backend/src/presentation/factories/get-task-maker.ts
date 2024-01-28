import { GetTask } from "../../application/services/get-task"; 
import { ObjectIdValidator } from "../../infra/mongodb/objectid-validator"; 
import { MongoTaskRepository } from "../../infra/mongodb/task-repository";
import { GetTaskController } from "../controllers/get-task"; 

export default function getTaskMaker(){
  const uuidValidator = new ObjectIdValidator();
  const taskRepository = new MongoTaskRepository();
  const getTaskService = new GetTask(taskRepository, uuidValidator);
  const getTaskController = new GetTaskController(getTaskService);
  return getTaskController;
}