import Checkbox from '@mui/material/Checkbox';
import { IoCalendarOutline } from "react-icons/io5";
import { TextField } from "@mui/material";
import { useParams } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import taskServices from '../services/task';

function EditContainer() {
  const id = useParams().id

  const { data } = useQuery({
    queryKey: ['taskById'],
    queryFn: () => taskServices.getTaskById(id || ""),
    enabled: !!id
    }
  )

  return (
    <div className="flex flex-col justify-start py-2">
      <div className="flex py-2 px-4 h-fit items-center border-b border-gray-200/50 gap-1">
        <Checkbox size="small"/>
        <div className="w-[0.5px] h-5 bg-gray-300"></div>
        <button className="flex items-center gap-2 text-blue-500 px-2 py-1.5 h-fit hover:bg-gray-100 rounded-md">
          <IoCalendarOutline className="w-5 h-5"/>
          <p className= "text-sm">Today, 27 jan</p>
        </button>
      </div>
      <div className="flex flex-col px-6 py-10 gap-6">
        <TextField
          id="outlined-required"
          label="Título"
          defaultValue={data?.title}
        />
        <TextField
          id="outlined-required"
          label="Descrição"
          defaultValue={data?.description}
          multiline
          rows={4}
        />
      </div>
    </div>
  )
}

export default EditContainer