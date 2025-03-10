import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { Provider } from "react-redux";
import { createBrowserRouter, RouterProvider } from "react-router";
import { store } from "./store/todoStore.ts";
import TaskBucket from "./components/TaskBucket.tsx";
import TaskCalender from "./components/TaskCalender.tsx";
import TaskCompeleted from "./components/TaskCompeleted.tsx";
import {
  LabelLeisure,
  LabelOther,
  LabelPersonal,
  LabelWork,
} from "./components/Labels.tsx";
import {
  HighPriority,
  LowPriority,
  MediumPriority,
  NonePriority,
} from "./components/Priority.tsx";

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
      {
        path: "/label/personal",
        Component: LabelPersonal,
      },
      {
        path: "/label/work",
        Component: LabelWork,
      },
      {
        path: "/label/others",
        Component: LabelOther,
      },
      {
        path: "/priority/high",
        Component: HighPriority,
      },
      {
        path: "/priority/medium",
        Component: MediumPriority,
      },
      {
        path: "/priority/low",
        Component: LowPriority,
      },
      {
        path: "/priority/none",
        Component: NonePriority,
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
