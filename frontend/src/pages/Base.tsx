import { Outlet } from "react-router-dom"
import Menu from "../components/Menu"

function Base() {
  return (
    <div className="w-screen flex">
      <Menu />
      <Outlet/>
    </div>
  )
}

export default Base