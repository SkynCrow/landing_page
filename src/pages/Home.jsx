import { Grid2, Paper } from "@mui/material";
import SessionTracker from "../components/SessionTracker";
import Welcome from "../components/Welcome";
import useAuth from "../hooks/useAuth";
import VTK from "../components/ViewerVTK.jsx";
export default function Home() {
  const {isAuthenticated} = useAuth();
  return (
    <Grid2 container p={2} direction={"column"} width={"80%"} gap={3}>
        <Welcome/>
        {isAuthenticated && <SessionTracker/>}
        {/* <Viewer /> */}
        {/* <VTK /> */}
        <VTK fileUrl="/output.vtp"/>
    </Grid2>
  );
}
