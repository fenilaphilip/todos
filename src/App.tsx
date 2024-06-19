import Todos from "./components/Todos";
import Todo from "./data/todo.ts";

function App() {
  const todos = [new Todo("Do cleaning "), new Todo("Do washing")];

  return (
    <>
      <Todos items={todos} />
    </>
  );
}

export default App;
