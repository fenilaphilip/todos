import { type Navigation, type Branding } from "@toolpad/core/AppProvider";
import { ReactRouterAppProvider } from "@toolpad/core/react-router";
import { DashboardLayout } from "@toolpad/core/DashboardLayout";
import FormatListBulletedSharpIcon from "@mui/icons-material/FormatListBulletedSharp";
import { Outlet } from "react-router-dom";

function App() {
  const BRAND: Branding = { logo: "", title: "TODOS" };
  const NAVIGATION: Navigation = [
    {
      segment: "allTasks",
      title: "Tasks Bucket",
      icon: <FormatListBulletedSharpIcon />,
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
