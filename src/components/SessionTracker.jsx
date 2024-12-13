import {
  Box,
  Grid2,
  Paper,
  Step,
  StepContent,
  StepLabel,
  Stepper,
  Typography,
} from "@mui/material";
import useStats from "../hooks/useStats";
import useAuth from "../hooks/useAuth";
import { useEffect, useState } from "react";

export default function SessionTracker() {
  const { isAuthenticated, sessionID } = useAuth();
  const { records, recordLenght } = useStats();
  const [steps, setSteps] = useState([]);
  const [selectionKey, setSelectionKey] = useState(0);

  useEffect(() => {
    const tmp_steps = [];
    setSteps([]);
    records.forEach((value, key) => {
      tmp_steps.push(
          <Step
            key={key}
            id={key}
            active={key == selectionKey}
            onClick={() => {
              console.log(key);
              setSelectionKey(key);
            }}
          >
            <StepLabel>{value.type}</StepLabel>
            <StepContent>
              <Typography>{JSON.stringify(value)}</Typography>
            </StepContent>
          </Step>
      );
    });

    tmp_steps.reverse();
    setSteps(tmp_steps);
    
  }, [recordLenght, records]);

  if (!isAuthenticated) return null;

  return (
    <Grid2
      container
      component={Paper}
      borderRadius={3}
      p={2}
      direction={"column"}
    >
      <Typography variant="h6">Session Tracker</Typography>
      <Typography variant="body1">Session ID: {sessionID}</Typography>

      <Box maxHeight={"30vh"} overflow={"scroll"} maxWidth={"100%"}>
        <Stepper nonLinear activeStep={selectionKey} orientation="vertical">
          {steps}
        </Stepper>
      </Box>
    </Grid2>
  );
}
