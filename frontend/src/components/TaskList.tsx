import { Task } from "../types"
import TaskContainer from "./TaskContainer"

interface props {
  tasks: Task[] | undefined,
  selected: string | null,
  setSelected: React.Dispatch<React.SetStateAction<string | null>>,
  url: string
}

function TaskList({ tasks, selected, setSelected, url }: props) {
  return (
    <div className="py-4">
      {
        tasks?.map(el => (
          <TaskContainer
            key={el.id}
            task={el}
            selected={selected}
            setSelected={setSelected}
            url={url}
          />
        ))
      }
    </div>
  )
}

export default TaskList