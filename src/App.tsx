import { type Branding } from "@toolpad/core/AppProvider";
import { ReactRouterAppProvider } from "@toolpad/core/react-router";
import { DashboardLayout } from "@toolpad/core/DashboardLayout";
import { Outlet } from "react-router-dom";
import Box from "@mui/material/Box";
import { NAVIGATION } from "./Navigation";
import Settings from "./components/Settings";

const BRAND: Branding = { logo: "", title: "TODOS" };

export default function App() {
  return (
    <>
      <ReactRouterAppProvider navigation={NAVIGATION} branding={BRAND}>
        <DashboardLayout slots={{ sidebarFooter: Settings }}>
          <Box margin={2} marginTop={1} padding={3} paddingTop={1}>
            <Outlet />
          </Box>
        </DashboardLayout>
      </ReactRouterAppProvider>
    </>
  );
}
