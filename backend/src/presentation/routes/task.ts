import express, { RequestHandler } from "express";
import getAllTasksMaker from "../factories/get-all-tasks-maker";
import createTaskMaker from "../factories/create-task-maker";
import updateTaskMaker from "../factories/update-task-maker";
import deleteTaskMaker from "../factories/delete-task-maker";
import getTaskMaker from "../factories/get-task-maker";

const taskRouter = express.Router();

taskRouter.get('/', ((req, res) => getAllTasksMaker().handle(req, res)) as RequestHandler);
taskRouter.post('/', ((req, res) => createTaskMaker().handle(req, res)) as RequestHandler);
taskRouter.get('/:id', ((req, res) => getTaskMaker().handle(req, res)) as RequestHandler);
taskRouter.put('/:id', ((req, res) => updateTaskMaker().handle(req, res)) as RequestHandler);
taskRouter.delete('/:id', ((req, res) => deleteTaskMaker().handle(req, res)) as RequestHandler);

export default taskRouter;