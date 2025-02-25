import SideNavbar from "./components/Navbar/SideNavbar.tsx";
import TopNavbar from "./components/Navbar/TopNavbar.tsx";
import NewTodo from "./components/NewTodo.tsx";
import Todos from "./components/Todos";
import ThemeContextProvider from "./store/themeContext.tsx";
import TodosContextProvider from "./store/todos-context.tsx";
import { Routes, Route } from "react-router-dom";
import "./index.css";

function App() {
  return (
    <ThemeContextProvider>
      <TodosContextProvider>
        <TopNavbar />
        <div className="display">
          <div className="sidebar">
            <SideNavbar />
          </div>
          <div className="dashboard">
            <Routes>
              <Route path="/" element={<NewTodo />} />
              <Route path="/create" element={<NewTodo />} />
              <Route path="/todos" element={<Todos />} />
            </Routes>
          </div>
        </div>
      </TodosContextProvider>
    </ThemeContextProvider>
  );
}

export default App;
