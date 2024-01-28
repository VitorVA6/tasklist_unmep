import { Task } from "../types"
import TaskContainer from "./TaskContainer"

interface props {
  tasks: Task[] | undefined,
  selected: string | null,
  setSelected: React.Dispatch<React.SetStateAction<string | null>>
}

function TaskList({ tasks, selected, setSelected }: props) {
  return (
    <div className="py-4">
      {
        tasks?.map(el => (
          <TaskContainer
            key={el.id}
            task={el}
            selected={selected}
            setSelected={setSelected}
          />
        ))
      }
    </div>
  )
}

export default TaskList