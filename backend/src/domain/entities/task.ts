export enum status {
  PENDING = 'pendente',
  DOING = 'executando',
  DONE = 'concluida'
}

export interface Task {
  id: string,
  title: string,
  description: string,
  data: Date,
  status: status
}