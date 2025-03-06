import { type Navigation, type Branding } from "@toolpad/core/AppProvider";
import { ReactRouterAppProvider } from "@toolpad/core/react-router";
import { DashboardLayout } from "@toolpad/core/DashboardLayout";
import AssignmentIcon from "@mui/icons-material/Assignment";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import { Outlet } from "react-router-dom";

function App() {
  const BRAND: Branding = { logo: "", title: "TODOS" };
  const NAVIGATION: Navigation = [
    {
      segment: "allTasks",
      title: "Tasks Bucket",
      icon: <AssignmentIcon />,
    },
    {
      segment: "calenderView",
      title: "Tasks Calender",
      icon: <CalendarMonthIcon />,
    },
  ];

  return (
    <>
      <ReactRouterAppProvider navigation={NAVIGATION} branding={BRAND}>
        <DashboardLayout>
          <Outlet />
        </DashboardLayout>
      </ReactRouterAppProvider>
    </>
  );
}

export default App;
