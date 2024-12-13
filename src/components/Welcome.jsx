import { Grid2, Paper } from "@mui/material";


export default function Welcome() {
    return (
        <Grid2 container component={Paper} borderRadius={3} p={2} direction={"column"}>
            <Grid2>
                <h1>Home</h1>
            </Grid2>
            <Grid2>
                <p>This is the home page.</p>
            </Grid2>
        </Grid2>
    );
    }