import { Request, Response } from "express";
import { CreateTask } from "../../application/services/create-task";

export class CreateTaskController{
  constructor(
    private readonly createTask: CreateTask
  ){}

  async handle(req: Request, res: Response){
    try{
      const newTask = await this.createTask.execute(req.body);
      res.status(201).json(newTask).end();
    }catch(error){
      if(error instanceof Error) res.status(400).json({message: error.message}).end();
      else res.status(400).json({error: 'Ocorreu um erro na criação da tarefa'}).end();
    }
  }
}