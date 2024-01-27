import TaskList from "../components/TaskList"
import { Task } from "../types"
import { status } from "../types"

function Inbox() {
  const tasks: Task[] = [
    {
      id: '1',
      title: 'tarefa 1',
      description: 'essa é a tarefa 1',
      date: '17-03-1996',
      status: status.PENDING
    },
    {
      id: '2',
      title: 'tarefa 2',
      description: 'essa é a tarefa 2',
      date: '17-03-1996',
      status: status.DONE
    },
    {
      id: '3',
      title: 'tarefa 3',
      description: 'essa é a tarefa 3',
      date: '17-03-1996',
      status: status.DOING
    },
    {
      id: '4',
      title: 'tarefa 4',
      description: 'essa é a tarefa 4',
      date: '17-03-1996',
      status: status.PENDING
    },
  ] 

  return (
    <div className="grid grid-cols-5 w-full text-black/80 px-6">
      <div className=" col-span-3 w-full border-r border-gray-100">
        <h1 className="text-[22px] font-medium py-5">Inbox</h1>
        <TaskList tasks={tasks}/>
      </div>
    </div>
  )
}

export default Inbox;