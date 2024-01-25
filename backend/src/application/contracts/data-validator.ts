export interface DataValidator<T>{
  validate: (data: unknown) => T
}