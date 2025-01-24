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
      <div className={classes.newTodoContainer}>
        <div className={classes.createtodo}>Create To do</div>

        <form onSubmit={submitHandler} className={classes.form}>
          <label>Task name:</label>
          <input
            type="text"
            id="newTaskInput"
            ref={todoTextInputRef}
            placeholder="What to do..........??"
            className={classes.newInput}
          />
          <div className={classes.formarea}>
            <div>
              <label>More info:</label>
              <textarea
                id="inputMoreInfo"
                placeholder="Enter more details......."
                className={classes.moreinfo}
              />
            </div>
            <div>
              <label className={classes.prioritylabel}>Set Priority:</label>
              <div className={classes.prioritylevel}>
                <input
                  type="radio"
                  id="lowPriority"
                  name="priority"
                  value="low"
                />
                <label htmlFor="lowPriority">Low</label>
                <input
                  type="radio"
                  id="mediumPriority"
                  name="priority"
                  value="mediumPriority"
                />
                <label htmlFor="medium">Medium</label>
                <input
                  type="radio"
                  id="highPriority"
                  name="priority"
                  value="high"
                />
                <label htmlFor="high">High</label>
              </div>
              <br />
              <br />
              <label>When you should finish this task?</label>
              <input type="date" id="deadlineInput" placeholder="" />
              <br />
              <button>Add Todo</button>
              <button>Reset Todo</button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default NewTodo;
