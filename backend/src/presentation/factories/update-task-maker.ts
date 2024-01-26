import { UpdateTask } from "../../application/services/update-task";
import { TaskValidator } from "../../application/utils/task-validator";
import { ObjectIdValidator } from "../../infra/mongodb/objectid-validator"; 
import { MongoTaskRepository } from "../../infra/mongodb/task-repository";
import { UpdateTaskController } from "../controllers/update-task";


export default function updateTaskMaker(){
  const uuidValidator = new ObjectIdValidator();
  const taskValidator = new TaskValidator();
  const taskRepository = new MongoTaskRepository();
  const updateTaskService = new UpdateTask(taskRepository, taskValidator, uuidValidator);
  const updateTaskController = new UpdateTaskController(updateTaskService);
  return updateTaskController;
}