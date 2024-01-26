import { DataValidator } from "../../application/contracts/data-validator";
import mongoose from "mongoose";

export class ObjectIdValidator implements DataValidator<string> {
  validate(data: unknown): string{
    if(!data || typeof data !== 'string') throw new Error('ID inválido');
    if(!mongoose.isValidObjectId(data)) throw new Error('ID inválido');
    return data;
  }
}