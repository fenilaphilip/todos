import React, { useState, useRef } from "react";
import { useDispatch } from "react-redux";
import classes from "../styles/NewTodo.module.css";
import { addTodo } from "../store/todoSlice";
import Todo, { Priority } from "../dataModel/todo";

const initialTask: Todo = {
  id: new Date().toLocaleDateString(),
  caption: "",
  description: "",
  dueDate: new Date(""),
  completed: false,
  priority: Priority.Medium,
};

const NewTodo: React.FC = () => {
  const [task, setTask] = useState(initialTask);
  const priorityRef = useRef<HTMLInputElement>(null);
  const dispatch = useDispatch();

  const resetHandler = () => {};

  const submitHandler = (event: React.FormEvent) => {
    event.preventDefault();

    if (task.caption.trim().length === 0) {
      alert("Please enter task name");
      return;
    }

    const priorityUserSelected = priorityRef.current!.value;
    console.log(`priority ${priorityUserSelected}`);

    console.log(`Task ${JSON.stringify(task)}`);

    if (priorityUserSelected == "Low") {
      setTask({
        ...task,
        priority: Priority.Low,
      });
    } else if (priorityUserSelected == "Medium") {
      setTask({
        ...task,
        priority: Priority.Medium,
      });
    } else {
      setTask({
        ...task,
        priority: Priority.High,
      });
    }

    dispatch(addTodo(task));
    setTask(initialTask);
  };

  return (
    <div className={classes.newTodoContainer}>
      <form onSubmit={submitHandler} className={classes.form}>
        <label>Task name:</label>
        <input
          type="text"
          id="newTaskInput"
          value={task.caption}
          placeholder="What to do..........??"
          className={classes.newInput}
          onChange={(e) => setTask({ ...task, caption: e.target.value })}
        />
        <div className={classes.formarea}>
          <div>
            <label>More info:</label>
            <textarea
              id="inputMoreInfo"
              value={task.description}
              placeholder="Enter more details......."
              className={classes.moreinfo}
              onChange={(e) =>
                setTask({ ...task, description: e.target.value })
              }
            />
          </div>
          <div>
            <label className={classes.prioritylabel}>Set Priority:</label>
            <div className={classes.prioritylevel}>
              <input
                type="radio"
                id="lowPriority"
                name="priority"
                ref={priorityRef}
                value="Low"
              />
              <label htmlFor="lowPriority">Low</label>
              <input
                type="radio"
                id="mediumPriority"
                name="priority"
                ref={priorityRef}
                value="Medium"
              />
              <label htmlFor="medium">Medium</label>
              <input
                type="radio"
                id="highPriority"
                name="priority"
                ref={priorityRef}
                value="High"
              />
              <label htmlFor="high">High</label>
            </div>
            <br />
            <br />
            <label>When you should finish this task?</label>
            <input
              type="date"
              id="deadlineInput"
              placeholder=""
              onChange={(e) => {
                setTask({ ...task, dueDate: new Date(e.target.value) });
              }}
            />
            <br />
            <button>Add Todo</button>
            <button onReset={resetHandler}>Reset Todo</button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default NewTodo;
