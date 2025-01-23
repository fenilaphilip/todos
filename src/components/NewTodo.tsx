import React, { useRef, useContext } from "react";
import { TodosContext } from "../store/todos-context.tsx";
import classes from "../styles/NewTodo.module.css";

const NewTodo: React.FC = () => {
  const todoTextInputRef = useRef<HTMLInputElement>(null);

  const todoCtx = useContext(TodosContext);
  const submitHandler = (event: React.FormEvent) => {
    event.preventDefault();

    const enteredText = todoTextInputRef.current!.value;
    if (enteredText.trim().length === 0) {
      //throw an error
      return;
    }

    todoCtx.addTodo(enteredText);
  };

  return (
    <>
      <div className={classes.appname}>Todos</div>
      <form onSubmit={submitHandler} className={classes.form}>
        <label>Task name:</label>
        <input
          type="text"
          id="text"
          ref={todoTextInputRef}
          placeholder="What to do..........??"
        />
        <button>Add Todo</button>
      </form>
    </>
  );
};

export default NewTodo;
