import SideNavbar from "./components/Navbar/SideNavbar.tsx";
import TopNavbar from "./components/Navbar/TopNavbar.tsx";
import NewTodo from "./components/CreateNewTodo/NewTodo.tsx";
import Todos from "./components/ViewAllTasks/Todos.tsx";
import { Routes, Route } from "react-router-dom";
import "./index.css";

function App() {
  return (
    <>
      <TopNavbar />
      <div className="display">
        <div className="sidebar">
          <SideNavbar />
        </div>
        <div className="dashboard">
          <Routes>
            <Route path="/" element={<Todos />} />
            <Route
              path="/create"
              element={
                <>
                  <NewTodo /> <Todos />
                </>
              }
            />
          </Routes>
        </div>
      </div>
    </>
  );
}

export default App;
