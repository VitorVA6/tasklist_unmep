import { Request, Response } from "express";
import { GetTask } from "../../application/services/get-task"; 

export class GetTaskController{
  constructor(
    private readonly getTask: GetTask
  ){}

  async handle(req: Request, res: Response){
    try{
      const id = req.params.id;
      const task = await this.getTask.execute(id);
      res.json(task).end();
    }catch(error){
      if(error instanceof Error) res.status(400).json({message: error.message}).end();
      else res.status(400).json({error: 'Ocorreu um erro'}).end();
    }
  }
}