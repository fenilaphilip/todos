import { createBrowserRouter } from "react-router-dom";
import App from "./App.tsx";
import TaskBucket from "./components/TaskBucket.tsx";
import TaskCalender from "./components/TaskCalender.tsx";
import TaskCompeleted from "./components/TaskCompeleted.tsx";
import { LabelLeisure } from "./components/labels/Leisure.tsx";
import { LabelPersonal } from "./components/labels/Personal.tsx";
import { LabelWork } from "./components/labels/Work.tsx";
import { LabelOthers } from "./components/labels/Others.tsx";
import { HighPriorityTasks } from "./components/priority/HighPriority.tsx";
import { MediumPriorityTasks } from "./components/priority/MediumPriority.tsx";
import { LowPriorityTasks } from "./components/priority/LowPriority.tsx";
import Settings from "./components/Settings.tsx";

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
        path: "/settings",
        Component: Settings,
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
        Component: LabelOthers,
      },
      {
        path: "/priority/high",
        Component: HighPriorityTasks,
      },
      {
        path: "/priority/medium",
        Component: MediumPriorityTasks,
      },
      {
        path: "/priority/low",
        Component: LowPriorityTasks,
      },
    ],
  },
]);
