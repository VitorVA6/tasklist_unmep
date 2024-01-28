import { Link, useNavigate } from "react-router-dom";
import { Task } from "../types";
import Checkbox from '@mui/material/Checkbox';
import { GoTrash } from "react-icons/go";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import taskervices from "../services/task";

interface props {
  task: Task,
  selected: string | null,
  setSelected: React.Dispatch<React.SetStateAction<string | null>>
}

function TaskContainer({task, selected, setSelected}: props){
  const navigate = useNavigate()
  const queryClient = useQueryClient()

  const classManager = (sel: string | null) => {
    switch (sel){
      case task.id:
        return 'bg-blue-50'
      default:
        return 'hover:bg-gray-50 border-b border-gray-200/50'
    }
  }
  const formatDate = (d: string): string => {
    const date = new Date(d);
    const today = new Date();
    const tomorrow = new Date();
    const yesterday = new Date();
    const week = new Date();
    tomorrow.setDate(today.getDate() + 1)
    yesterday.setDate(today.getDate() - 1)
    week.setDate(today.getDate() + 7)

    if(date.toDateString() === today.toDateString()) return 'Today';
    if(date.toDateString() === tomorrow.toDateString()) return "Tomorrow"
    if(date.toDateString() === yesterday.toDateString()) return "Yesterday"
    const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado'];
    const daysDiference = Math.ceil((date.getTime() - today.getTime()) / (1000 * 3600 * 24));
    if(daysDiference <= 7 && date.toDateString() > yesterday.toDateString()) return weekDays[date.getDay()]
    return `${date.getDate()} ${date.toLocaleDateString('default', {month: 'short'})}`
  }

  const deleteTask = useMutation({
    mutationFn: taskervices.deleteTask,
    onSuccess: () => {
      navigate('/inbox')
      queryClient.invalidateQueries({ queryKey: ['tasks'] })
    }
  })

  const handleClick = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    event.stopPropagation()
    event.preventDefault()
    deleteTask.mutate(task.id)
  }

  return (
    <Link
      to={`/inbox/${task.id}`}
      className={`px-3 py-1 rounded-md flex justify-between items-center ${classManager(selected)}`}
      onClick={() => setSelected(task.id)}
    >
      <div className="flex items-center gap-1">
        <Checkbox size="small"/>
        {task.title}
      </div>
      <div className="flex items-center gap-3">
        <p className="text-xs text-blue-500">{formatDate(task.date)}</p>
        <button className="text-gray-500" onClick={handleClick}><GoTrash /></button>
      </div>
    </Link>
  )
}

export default TaskContainer;