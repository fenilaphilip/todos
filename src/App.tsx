// import NewTodo from "./components/NewTodo.tsx";
import Navbar from "./components/Navbar.tsx";
// import Todos from "./components/Todos";
import TodosContextProvider from "./store/todos-context.tsx";

function App() {
  return (
    <TodosContextProvider>
      <Navbar />
      {/* <NewTodo />
      <Todos /> */}
    </TodosContextProvider>
  );
}

export default App;
