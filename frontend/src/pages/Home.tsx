import TaskList from "../components/TaskList"
import { Task } from "../types"
import { status } from "../types"

function Home() {
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
    <div>
      <h1>Todas as tarefas</h1>
      <TaskList tasks={tasks}/>
    </div>
  )
}

export default Home