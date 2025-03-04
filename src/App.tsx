import NewTodo from "./components/CreateNewTodo/NewTodo.tsx";
import Todos from "./components/ViewAllTasks/Todos.tsx";
import { type Navigation, type Branding } from "@toolpad/core/AppProvider";
import { ReactRouterAppProvider } from "@toolpad/core/react-router";
import { DashboardLayout } from "@toolpad/core/DashboardLayout";
import CreateSharpIcon from "@mui/icons-material/CreateSharp";
import FormatListBulletedSharpIcon from "@mui/icons-material/FormatListBulletedSharp";

function App() {
  const BRAND: Branding = { logo: "", title: "TODOS" };
  const NAVIGATION: Navigation = [
    {
      segment: "Create",
      title: "Create",
      icon: <CreateSharpIcon />,
    },
    {
      segment: "Tasks",
      title: "All Tasks",
      icon: <FormatListBulletedSharpIcon />,
    },
  ];

  return (
    <>
      <ReactRouterAppProvider navigation={NAVIGATION} branding={BRAND}>
        <DashboardLayout>
          <NewTodo />
          <Todos />
        </DashboardLayout>
      </ReactRouterAppProvider>
    </>
  );
}

export default App;
