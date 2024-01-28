import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Base from "./pages/Base"
import Inbox from "./pages/Inbox"
import ToInbox from "./pages/ToInbox"
import Today from "./pages/Today"
import Week from "./pages/Week"
import Completed from "./pages/Completed"
import NoEdit from "./components/NoEdit"
import EditContainer from "./components/EditContainer"

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Base />}>
            <Route index element={<ToInbox />}/>
            <Route path="/inbox" element={<Inbox/>}>
              <Route index element={<NoEdit/>}/>
              <Route path="/inbox/:id" element={<EditContainer/>}/>
            </Route>
            <Route path="/today" element={<Today/>}/>
            <Route path="/week" element={<Week/>}/>
            <Route path="/completed" element={<Completed/>}/>
          </Route>
        </Routes>
      </Router>
    </>
  )
}

export default App