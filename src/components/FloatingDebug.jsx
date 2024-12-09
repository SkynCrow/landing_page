import { Box, Typography } from "@mui/material";
import useAuth from "../hooks/useAuth";
import useStats from "../hooks/useStats";

export default function FloatingDebug() {
  const { isAuthenticated } = useAuth();
  const { lastClick } = useStats();
  return (
    <Box
      id="floating-debug"
      sx={{
        position: "fixed",
        bottom: 0,
        left: 0,
        width: "100%",
        bgcolor: "rgba(0, 0, 0, 0.7)",
        color: "white",
        p: 2,
        textAlign: "center",
      }}
    >
      <Typography variant="body1" id="debug.lastClick">
        Clicks: {JSON.stringify(lastClick)}
      </Typography>
      <Typography variant="body1" id="debug.isAuthenticated">
        Is authenticated: {isAuthenticated ? "Yes" : "No"}
      </Typography>
    </Box>
  );
}
