import Checkbox from '@mui/material/Checkbox';
import { IoCalendarOutline } from "react-icons/io5";
import { TextField } from "@mui/material";

function EditContainer() {
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
          defaultValue="Hello World"
        />
        <TextField
          id="outlined-required"
          label="Descrição"
          defaultValue="Hello World"
          multiline
          rows={4}
        />
      </div>
    </div>
  )
}

export default EditContainer