import SideNavbar from "./components/Navbar/SideNavbar.tsx";
import TopNavbar from "./components/Navbar/TopNavbar.tsx";
import NewTodo from "./components/Create/NewTodo.tsx";
// import Todos from "./components/Todos";
import ThemeContextProvider from "./store/themeContext.tsx";
import TodosContextProvider from "./store/todos-context.tsx";

function App() {
  return (
    <ThemeContextProvider>
      <TodosContextProvider>
        <TopNavbar />
        <SideNavbar />
        <NewTodo />
        {/* <Todos /> */}
      </TodosContextProvider>
    </ThemeContextProvider>
  );
}

export default App;
