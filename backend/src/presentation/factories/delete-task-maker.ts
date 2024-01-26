import { DeleteTask } from "../../application/services/delete-task";
import { ObjectIdValidator } from "../../infra/mongodb/objectid-validator"; 
import { MongoTaskRepository } from "../../infra/mongodb/task-repository";
import { DeleteTaskController } from "../controllers/delete-task";

export default function deleteTaskMaker(){
  const uuidValidator = new ObjectIdValidator();
  const taskRepository = new MongoTaskRepository();
  const deleteTaskService = new DeleteTask(taskRepository, uuidValidator);
  const deleteTaskController = new DeleteTaskController(deleteTaskService);
  return deleteTaskController;
}