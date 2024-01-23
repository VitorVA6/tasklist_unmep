export interface IDeleteTask{
  execute: (id: unknown) => Promise<void>
}