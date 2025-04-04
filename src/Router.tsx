import { createBrowserRouter } from "react-router-dom";
import App from "./App.tsx";
import TaskBucket from "./components/dashboard/TaskBucket.tsx";
import TaskCalender from "./components/dashboard/TaskCalender.tsx";
import TaskCompeleted from "./components/dashboard/TaskCompeleted.tsx";
import Settings from "./components/dashboard/Settings.tsx";
import {
  LabelsComponent,
  PriorityComponent,
} from "./components/filters/LabelPriorityComponent.tsx";

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
        path: "/label/:labelname",
        Component: LabelsComponent,
      },
      {
        path: "/priority/:prioritylevel",
        Component: PriorityComponent,
      },
    ],
  },
]);
