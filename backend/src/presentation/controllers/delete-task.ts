import { Request, Response } from "express";
import { DeleteTask } from "../../application/services/delete-task"; 

export class DeleteTaskController{
  constructor(
    private readonly deleteTask: DeleteTask
  ){}

  async handle(req: Request, res: Response){
    try{
      const id = req.params.id;
      await this.deleteTask.execute(id);
      res.status(204).end();
    }catch(error){
      if(error instanceof Error) res.status(400).json({message: error.message}).end();
      else res.status(400).json({error: 'Ocorreu um erro na deleção da tarefa'}).end();
    }
  }
}