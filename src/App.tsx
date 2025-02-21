// import NewTodo from "./components/NewTodo.tsx";
import Navbar from "./components/Navbar/Navbar.tsx";
// import Todos from "./components/Todos";
import ThemeContextProvider from "./store/themeContext.tsx";
import TodosContextProvider from "./store/todos-context.tsx";

function App() {
  return (
    <ThemeContextProvider>
      <TodosContextProvider>
        <Navbar />
        {/* <NewTodo />
      <Todos /> */}
      </TodosContextProvider>
    </ThemeContextProvider>
  );
}

export default App;
