import { DataValidator } from "../contracts/data-validator";

export class UUIDValidator implements DataValidator<string>{
  validate(data: unknown): string{
    if(!data || typeof data !== 'string') throw new Error('ID inválido');

    const regexExp = /^[0-9a-fA-F]{8}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{12}$/gi;
    if(regexExp.test(data)) return data;
    throw new Error('ID inválido');
  }
}