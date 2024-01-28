import list from '../images/list.png'

function NoEdit() {
  return (
    <div className="flex flex-col items-center justify-center w-full h-full gap-10">
      <img
        src={list}
        alt="lista de tarefas"
        className="w-32 h-32 -mt-20"
      />
      <p className="text-gray-400">Clique no tarefa para vizualizar e editar os detalhes</p>
    </div>
  )
}

export default NoEdit