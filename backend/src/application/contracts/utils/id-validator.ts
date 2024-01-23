export interface IdValidator{
  validate: (id: unknown) => string
}