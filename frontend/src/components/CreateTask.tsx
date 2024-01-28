import { Button, TextField } from "@mui/material"
import { SyntheticEvent, useState } from "react"
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import { useMutation, useQueryClient } from '@tanstack/react-query';
import taskServices from "../services/task";
import { status } from "../types";

interface props {
  setModal: React.Dispatch<React.SetStateAction<boolean>>
}

function CreateTask({setModal}: props) {
  const queryClient = useQueryClient()
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [date, setDate] = useState<Date>(new Date())

  const closeModal = () => {
    setTimeout(() => setModal(false), 200) 
  }

  const createTask = useMutation({
    mutationFn: taskServices.createTask,
    onSuccess: () => {
      closeModal()
      queryClient.invalidateQueries({ queryKey: ['tasks']})
    }
  })

  const handleSubmit = (event: SyntheticEvent) => {
    event.preventDefault()
    createTask.mutate({
      title,
      description,
      date: date.toISOString(),
      status: status.DOING
    })
  }

  return (
    <>
    <div 
    className='w-screen h-screen bg-gray-200/50 absolute left-0 top-0 flex justify-center items-center z-10' 
    onClick={() => closeModal()}
    >
        
    </div>
    <div 
        className={`w-[30%] left-0 lg:left-1/2 lg:-translate-x-1/2 bottom-0 top-[20%] h-fit bg-white flex flex-col items-center z-20 absolute rounded-t-3xl lg:rounded-lg`}
        onSubmit={() => console.log('aehooo')}
    >
      <h1 className="flex justify-center py-4 text-xl font-medium border-b border-gray-200/60 w-full">Nova tarefa</h1>
      <form
        className="flex flex-col px-6 py-8 w-full gap-3"
        onSubmit={handleSubmit}
      >  
        <DatePicker
          selected={date}
          onChange={(date) => setDate(date || new Date())}
          className="cursor-pointer text-blue-500 w-24 outline-none"
        />
        <TextField
          label="Título"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
        <TextField
          label="Descrição"
          multiline
          rows={4}
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
        />
        <Button type="submit">Enviar</Button>
      </form>
    </div>
    </>
  )
}

export default CreateTask