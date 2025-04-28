import { type Branding } from "@toolpad/core/AppProvider";
import { ReactRouterAppProvider } from "@toolpad/core/react-router";
import { DashboardLayout } from "@toolpad/core/DashboardLayout";
import { Outlet } from "react-router-dom";
import Box from "@mui/material/Box";
import { type Navigation } from "@toolpad/core/AppProvider";
import BallotIcon from "@mui/icons-material/Ballot";
import ViewTimelineIcon from "@mui/icons-material/ViewTimeline";
import LabelIcon from "@mui/icons-material/Label";
import SettingsIcon from "@mui/icons-material/Settings";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import StarIcon from "@mui/icons-material/Star";
import InfoIcon from "@mui/icons-material/Info";
import {
  LabelsActiveTaskCount,
  PriorityActiveTaskCount,
} from "./components/filters/ActiveTaskCount";
import { useSelector } from "react-redux";
import { RootState } from "./store/todoStore";
import { Container } from "@mui/material";
import TodosLogo from "./assets/todosIcon.png";

const BRAND: Branding = {
  logo: <img src={TodosLogo || "android-chrome-192x192.png"} alt="logo" />,
  title: "TODOS",
};

export default function App() {
  const Labels = useSelector((state: RootState) => state.LABELS);

  const labelNav = () => {
    const labelsArrayForNav = Labels.map((label) => {
      return {
        segment: label,
        title: label,
        action: <LabelsActiveTaskCount key={label} labelName={label} />,
      };
    });
    return labelsArrayForNav;
  };

  const priorityNav = () => {
    const levels: string[] = ["High", "Medium", "Low"];
    const priorityArrayForNav = levels.map((level: string) => {
      return {
        segment: level,
        title: level,
        action: <PriorityActiveTaskCount key={level} level={level} />,
      };
    });
    return priorityArrayForNav;
  };

  const NAVIGATION: Navigation = [
    {
      kind: "header",
      title: "Dashboard",
    },
    {
      segment: "allTasks",
      title: "Task Bucket",
      icon: <BallotIcon />,
    },
    {
      segment: "calenderView",
      title: "Calender View",
      icon: <ViewTimelineIcon />,
    },
    {
      segment: "completedTasks",
      title: "Completed Tasks",
      icon: <CheckCircleIcon />,
    },
    {
      segment: "settings",
      title: "Settings",
      icon: <SettingsIcon />,
    },
    {
      segment: "Info",
      title: "Info",
      icon: <InfoIcon />,
    },
    {
      kind: "divider",
    },
    {
      kind: "header",
      title: "Filters",
    },
    {
      segment: "label",
      title: "Labels",
      icon: <LabelIcon />,
      children: labelNav(),
    },
    {
      segment: "priority",
      title: "Importance",
      icon: <StarIcon />,
      children: priorityNav(),
    },
  ];

  return (
    <>
      <ReactRouterAppProvider navigation={NAVIGATION} branding={BRAND}>
        <DashboardLayout>
          <Box component={Container}>
            <Outlet />
          </Box>
        </DashboardLayout>
      </ReactRouterAppProvider>
    </>
  );
}
