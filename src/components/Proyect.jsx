import { Box, Grid2, Paper, Typography } from "@mui/material";
import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import useTheme from "../hooks/useTheme";

Proyect.propTypes = {
  index: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
};

export default function Proyect({ index, title, description, url }) {
  const { breakpoint, breakpointIndex } = useTheme();

  useEffect(() => {
    console.log(breakpoint);
    console.log(breakpointIndex);
  }, [breakpoint]);

  const title_component = () => (
    <Grid2 size={12}>
      {" "}
      <Typography
        variant="h4"
        fontWeight={"bold"}
        align={index % 2 == 1 ? "right" : "left"}
      >
        {title}
      </Typography>
    </Grid2>
  );
  const description_component = () => (
    <Grid2 size={{ md: 12, lg: 6, xl: 6 }} sx={{
      backgroundImage: breakpointIndex == 0 ? `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.8)),url(${url})` : "",
      backgroundRepeat: "no-repeat",
      backgroundPosition: "center",
      backgroundSize: "cover",
      borderRadius: 3,
      p: 1,
      }}>
      <Typography variant="body1">{description}</Typography>
    </Grid2>
  );
  const image_component = () => (
    <Grid2
      container
      justifyContent={"center"}
      size={{ xs: 12, sm: 12, md: 12, lg: 6, xl: 6 }}
    >
      <Box
        sx={{
          maxHeight: "100%",
          maxWidth: "100%",
        }}
        component="img"
        alt="placeholder"
        src={url}
        
      />
    </Grid2>
  );

  return (
    <Paper
      sx={{
        p: 2,
        borderRadius: 3,
        
      }}
    >
      <Grid2 container spacing={2}>
        {title_component()}
        {breakpointIndex == 0 && description_component()}
        {breakpointIndex == 1 && [description_component(),image_component()]}
        {breakpointIndex == 2 && [description_component(),image_component()]}
        {breakpointIndex >= 3 &&
          (index % 2 == 0 ? description_component() : image_component())}
        {breakpointIndex >= 3 &&
          (index % 2 == 0 ? image_component() : description_component())}
      </Grid2>
    </Paper>
  );
}
