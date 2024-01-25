import { Task, status } from "../../domain/entities/task";
import { DataValidator } from "../contracts/data-validator";

export class TaskValidator implements DataValidator<Omit<Task, "id">>{
  isString(text: unknown): text is string {
    return typeof text === 'string' || text instanceof String;
  }

  isDate(date: string): boolean {
    return Boolean(Date.parse(date));
  }

  isStatus(param: string): param is status {
    return Object.values(status).map(v => v.toString()).includes(param);
  }

  parseStringField(data: unknown, field: string): string {
    if(!this.isString(data)){
      throw new Error(`${field} inválido`);
    }
    return data;
  }

  parseDate(date: unknown): Date {
    if(!this.isString(date) || !this.isDate(date)){
      throw new Error('Data inválida');
    }
    return new Date(date);
  }

  parseStatus(param: unknown): status {
    if(!this.isString(param) || !this.isStatus(param)){
      throw new Error('Status inválido');
    }
    return param;
  }

  validate(task: unknown): Omit<Task, "id">{
    if(!task || typeof task !== 'object') throw new Error('Tarefa inválida');
    if('title' in task && 'description' in task && 'date' in task && 'status' in task){
      const validatedTask: Omit<Task, 'id'> = {
        title: this.parseStringField(task.title, 'Título'),
        description: this.parseStringField(task.description, 'Descrição'),
        date: this.parseDate(task.date),
        status: this.parseStatus(task.status)
      };
      return validatedTask;
    }
    throw new Error('Campos inválidos na tarefa');
  }
}