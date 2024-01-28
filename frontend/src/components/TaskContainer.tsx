import { Task } from "../types";
import Checkbox from '@mui/material/Checkbox';

interface props {
  task: Task,
  selected: string | null,
  setSelected: React.Dispatch<React.SetStateAction<string | null>>
}


function TaskContainer({task, selected, setSelected}: props){
  
const classManager = (sel: string | null) => {
  switch (sel){
    case task.id:
      return 'bg-blue-50'
    default:
      return 'hover:bg-gray-50 border-b border-gray-200/50'
  }
}
  return (
    <div
      className={`px-3 py-1 rounded-md flex justify-between items-center ${classManager(selected)}`}
      onClick={() => setSelected(task.id)}
    >
      <div className="flex items-center gap-1">
        <Checkbox size="small"/>
        {task.title}
      </div>
      <button className="text-xs text-blue-500">Today</button>
    </div>
  )
}

export default TaskContainer;