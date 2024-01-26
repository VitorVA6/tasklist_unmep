import { Task } from "../types"

interface props {
  tasks: Task[]
}

function TaskList({ tasks }: props) {
  return (
    <div>
      {
        tasks.map(el => (<div>
          {el.title}
        </div>))
      }
    </div>
  )
}

export default TaskList