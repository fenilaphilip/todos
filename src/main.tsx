import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { Provider } from "react-redux";
import { createBrowserRouter, RouterProvider } from "react-router";
import { store } from "./store/todoStore.ts";
import NewTodo from "./components/CreateNewTodo/NewTodo.tsx";
import Todos from "./components/ViewAllTasks/Todos.tsx";
import "./index.css";

const router = createBrowserRouter([
  {
    Component: App,
    children: [
      {
        path: "/",
        Component: Todos,
      },
      {
        path: "/create",
        Component: NewTodo,
      },
      {
        path: "/todos",
        Component: Todos,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
