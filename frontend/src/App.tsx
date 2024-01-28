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
            <Route path="/today" element={<Today/>}>
              <Route index element={<NoEdit/>}/>
              <Route path="/today/:id" element={<EditContainer/>}/>
            </Route>
            <Route path="/week" element={<Week/>}>
              <Route index element={<NoEdit/>}/>
              <Route path="/week/:id" element={<EditContainer/>}/>
            </Route>
            <Route path="/completed" element={<Completed/>}>
              <Route index element={<NoEdit/>}/>
              <Route path="/completed/:id" element={<EditContainer/>}/>
            </Route>
          </Route>
        </Routes>
      </Router>
    </>
  )
}

export default App