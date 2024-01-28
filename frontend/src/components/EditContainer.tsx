import Checkbox from '@mui/material/Checkbox';
import { IoCalendarOutline } from "react-icons/io5";
import { Button, TextField } from "@mui/material";
import { useParams } from 'react-router-dom';
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import taskServices from '../services/task';
import { SyntheticEvent, useEffect, useState } from 'react';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import { status } from '../types';

function EditContainer() {
  const id = useParams().id
  const queryClient = useQueryClient()

  const { data } = useQuery({
    queryKey: ['taskById', id],
    queryFn: () => taskServices.getTaskById(id || ""),
    enabled: !!id
  })

  const [title, setTitle] = useState<string>(data?.title || '')
  const [description, setDescription] = useState<string>(data?.description || '')
  const [date, setDate] = useState<Date>(new Date())
  const [check, setCheck] = useState<status>(data?.status || status.DOING)

  useEffect(() => {
    setTitle(data?.title || '')
    setDescription(data?.description || '')
    setDate(new Date(data?.date || 0) || new Date())
    setCheck(data?.status || status.DOING)
  }, [data])

  const handleCheck = () => {
    if(check === status.DONE){
      setCheck(status.DOING)
    }else {
      setCheck(status.DONE)
    }
  }

  const editTask = useMutation({
    mutationFn: taskServices.updateTask,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['tasks'] })
    }
  })

  const handleSubmit = (event: SyntheticEvent) => {
    event.preventDefault()

    editTask.mutate({
      id: data?.id || '',
      title,
      description,
      date: date.toISOString(),
      status: check
    })
  }

  return (
    <form className="flex flex-col justify-start py-2" onSubmit={handleSubmit}>
      <div className="flex py-2 px-4 h-fit items-center border-b border-gray-200/50 gap-1">
        <Checkbox
          size="small"
          checked={check === status.DONE}
          onChange={handleCheck}
        />
        <div className="w-[0.5px] h-5 bg-gray-300"></div>
        <div className="flex items-center gap-2 text-blue-500 px-2 py-1.5 h-fit hover:bg-gray-100 rounded-md">
          <IoCalendarOutline className="w-5 h-5"/>
          <DatePicker
            selected={date}
            onChange={(date) => setDate(date || new Date())}
            className='cursor-pointer outline-none'
          />
        </div>
      </div>
      <div className="flex flex-col px-6 py-10 gap-6">
        <TextField
          label="Título"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <TextField
          label="Descrição"
          multiline
          rows={4}
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <Button type='submit' variant='contained'>Salvar</Button>
      </div>
    </form>
  )
}

export default EditContainer