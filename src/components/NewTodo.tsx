import React, { useState } from "react";
import { useDispatch } from "react-redux";
import classes from "../styles/NewTodo.module.css";
import { addTodo } from "../store/todoSlice";
import { Priority } from "../dataModel/todo";

const NewTodo: React.FC = () => {
  const [priority, setPriority] = useState(Priority.Medium);
  const [caption, setCaption] = useState("");
  const [description, setDescription] = useState("");
  const [dueDate, setDueDate] = useState<Date | undefined>(undefined);

  const dispatch = useDispatch();

  const resetHandler = (e: React.FormEvent) => {
    e.preventDefault();
    setPriority(Priority.Low);
    setDescription("");
    setCaption("");
    setDueDate(undefined);
  };

  const submitHandler = (e: React.FormEvent) => {
    e.preventDefault();
    if (caption.trim().length === 0) {
      alert("Please enter task name");
      return;
    }
    const newTask = {
      id: new Date().toLocaleDateString(),
      description: description,
      dueDate: dueDate,
      completed: false,
      caption: caption,
      priority: priority,
    };
    dispatch(addTodo(newTask));
  };

  return (
    <div className={classes.newTodoContainer}>
      <form onSubmit={submitHandler} className={classes.form}>
        <label>Task name:</label>
        <input
          type="text"
          id="newTaskInput"
          value={caption}
          placeholder="What to do..........??"
          className={classes.newInput}
          onChange={(e) => setCaption(e.target.value)}
        />
        <div className={classes.formarea}>
          <div>
            <label>More info:</label>
            <textarea
              id="inputMoreInfo"
              value={description}
              placeholder="Enter more details......."
              className={classes.moreinfo}
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>
          <div>
            <label className={classes.prioritylabel}>Set Priority:</label>
            <div className={classes.prioritylevel}>
              <input
                type="radio"
                id="lowPriority"
                name="priority"
                onChange={() => {
                  setPriority(Priority.Low);
                }}
                value="Low"
              />
              <label htmlFor="lowPriority">Low</label>
              <input
                type="radio"
                id="mediumPriority"
                name="priority"
                onChange={() => setPriority(Priority.Medium)}
                value="Medium"
              />
              <label htmlFor="medium">Medium</label>
              <input
                type="radio"
                id="highPriority"
                name="priority"
                onChange={() => setPriority(Priority.High)}
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
                setDueDate(new Date(e.target.value));
              }}
            />
            <br />
            <button>Add Todo</button>
            <button onClick={resetHandler}>Reset Todo</button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default NewTodo;
