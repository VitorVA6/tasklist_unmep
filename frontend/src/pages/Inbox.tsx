import TaskList from "../components/TaskList";
import list from '../images/list.png'
import { useState } from "react"
import { useQuery } from "@tanstack/react-query"
import taskServices from "../services/task";
import EditContainer from "../components/EditContainer";

function Inbox() {
  const [selected, setSelected] = useState<string | null>(null)

  const result = useQuery({
    queryKey: ['tasks'],
    queryFn: taskServices.getAll
  })

  if ( result.isLoading ) {
    return <div>loading data...</div>
  }

  return (
    <div className="grid grid-cols-5 w-full text-black/80">
      <div className=" col-span-3 w-full border-r border-gray-100 px-6">
        <h1 className="text-[22px] font-medium py-5">Inbox</h1>
        <TaskList tasks={result.data} selected={selected} setSelected={setSelected}/>
      </div>
      <div className="col-span-2">
        {
          selected === null ?
          <div className="flex flex-col items-center justify-center w-full h-full gap-10">
            <img
              src={list}
              alt="lista de tarefas"
              className="w-32 h-32 -mt-20"
            />
            <p className="text-gray-400">Clique no tarefa para vizualizar e editar os detalhes</p>
          </div> :
          <EditContainer/>
        }
      </div>
    </div>
  )
}

export default Inbox;