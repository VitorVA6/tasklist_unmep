import { Request, Response } from "express";
import { GetAllTasks } from "../../application/services/get-tasks"; 

export class GetAllTasksController{
  constructor(
    private readonly getAllTasks: GetAllTasks
  ){}

  async handle(_req: Request, res: Response){
    try{
      const tasks = await this.getAllTasks.execute();
      res.json(tasks).end();
    }catch(error){
      if(error instanceof Error) res.status(400).json({message: error.message}).end();
      else res.status(400).json({error: 'Ocorreu um erro na obtenção das tarefas'}).end();
    }
  }
}