import NewTodo from "./components/NewTodo.tsx";
import Todos from "./components/Todos";
import TodosContextProvider from "./store/todos-context.tsx";

function App() {
  return (
    <TodosContextProvider>
      <NewTodo />
      <Todos />
    </TodosContextProvider>
  );
}

export default App;
