import { createBrowserRouter } from "react-router-dom";
import App from "./App.tsx";
import TaskBucket from "./components/TaskBucket.tsx";
import TaskCalender from "./components/TaskCalender.tsx";
import TaskCompeleted from "./components/TaskCompeleted.tsx";
import {
  LabelLeisure,
  LabelOther,
  LabelPersonal,
  LabelWork,
} from "./components/Labels.tsx";
import { HighPriority } from "./components/priority/HighPriority.tsx";
import { MediumPriority } from "./components/priority/MediumPriority.tsx";
import { LowPriority } from "./components/priority/LowPriority.tsx";
import { NonePriority } from "./components/priority/NonePriority.tsx";

export const router = createBrowserRouter([
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
