import { Request, Response } from "express";
import { UpdateTask } from "../../application/services/update-task";

export class UpdateTaskController{
  constructor(
    private readonly updateTask: UpdateTask
  ){}

  async handle(req: Request, res: Response){
    try{
      const id = req.params.id;
      const updatedTask = await this.updateTask.execute(id, req.body);
      res.json(updatedTask).end();
    }catch(error){
      if(error instanceof Error) res.status(400).json({message: error.message}).end();
      else res.status(400).json({error: 'Ocorreu um erro na atualização da tarefa'}).end();
    }
  }
}