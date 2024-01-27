import { IoTodayOutline, IoCheckboxOutline  } from "react-icons/io5";
import { BsCalendar4Week } from "react-icons/bs";
import { GoInbox } from "react-icons/go";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";
import { CiSearch } from "react-icons/ci";
import { Link, useLocation } from "react-router-dom";

function Menu() {
  const location = useLocation()

  const classManager = (loc: string): boolean => {
    return loc === location.pathname 
  }
  return (
    <nav className="w-[360px] px-3 py-4 border-r h-screen">
      <div className="flex items-center gap-2 text-lg font-medium text-blue-500 px-3 pt-2 pb-5 border-b border-gray-100">
        <IoMdCheckmarkCircleOutline className="text-blue-500 w-7 h-7"/>
        UnMEP Tasks
      </div>
      <div className="pt-4 pb-6 border-b  border-gray-100">
        <div className='cursor-pointer px-3 py-2 rounded-md flex items-center gap-2 hover:bg-gray-50'>
          <CiSearch className="text-gray-500 w-6 h-6 -ml-1"/>
          Buscar
        </div>
        <Link
          to="/today" 
          className={`px-3 py-2 rounded-md flex items-center gap-2 ${classManager('/today')?'bg-blue-50':'hover:bg-gray-50'}`}
        >
          <IoTodayOutline className="text-gray-500 w-5 h-5"/>
          Hoje
        </Link>
        <Link
          to="/week"
          className={`px-3 py-2 rounded-md flex items-center gap-2 ${classManager('/week')?'bg-blue-50':'hover:bg-gray-50'}`}
        >
          <BsCalendar4Week className="text-gray-500 w-[18px] h-[18px] ml-[1px]"/>
          Em até 7 dias
        </Link>
        <Link
          to="/inbox"
          className={`px-3 py-2 rounded-md flex items-center gap-2 ${classManager('/inbox')?'bg-blue-50':'hover:bg-gray-50'}`}
        >
          <GoInbox className="text-gray-500 w-5 h-5"/>
          Inbox
        </Link>
      </div>
      <Link
        to="/completed"
        className={`px-3 py-2 rounded-md flex items-center gap-2 mt-4 ${classManager('/completed')?'bg-blue-50':'hover:bg-gray-50'}`}
      >
        <IoCheckboxOutline  className="text-gray-500 w-5 h-5"/>
        Completas
      </Link>
    </nav>
  )
}

export default Menu;