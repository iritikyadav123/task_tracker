import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import CreateTask from "./pages/CreateTask";
import Edit from "./pages/Edit";


export default function App() {
  return(
    <div>

      {/* <Text3 /> */}
       <Routes>
        <Route path="/"  element={<Home />}/>
        <Route path="/CreateTask"  element={<CreateTask />}/>
        <Route path="/Edit"  element={<Edit />}/>
         
       </Routes>
    </div>
  )
}