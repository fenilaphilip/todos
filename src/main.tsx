import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { Provider } from "react-redux";
import { createBrowserRouter, RouterProvider } from "react-router";
import { store } from "./store/todoStore.ts";
import TaskBucket from "./components/TaskBucket.tsx";
import TaskCalender from "./components/TaskCalender.tsx";
import TaskCompeleted from "./components/TaskCompeleted.tsx";
import LabelLeisure from "./components/Labels/LabelLeisure.tsx";

const router = createBrowserRouter([
  {
    Component: App,
    children: [
      {
        path: "/",
        Component: TaskBucket,
      },
      {
        path: "/allTasks",
        Component: TaskBucket,
      },
      {
        path: "/calenderView",
        Component: TaskCalender,
      },
      {
        path: "/completedTasks",
        Component: TaskCompeleted,
      },
      {
        path: "/label/leisure",
        Component: LabelLeisure,
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
