import TaskList from "../components/TaskList";
import { useState } from "react"
import { useQuery } from "@tanstack/react-query"
import taskServices from "../services/task";
import { Outlet } from "react-router-dom";
import { status } from "../types";

function Today() {
  const hoje = new Date();
  hoje.setHours(23, 59, 59, 999);

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
        <h1 className="text-[22px] font-medium py-5">Hoje</h1>
        <TaskList tasks={result.data?.filter(el => new Date(el.date) <= hoje && el.status !== status.DONE)} selected={selected} setSelected={setSelected} url="today"/>
      </div>
      <div className="col-span-2">
        <Outlet/>
      </div>
    </div>
  )
}

export default Today