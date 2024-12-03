import { Container } from "@mui/material";
import Navbar from "../components/Navbar";
import FloatingDebug from "../components/FloatingDebug";
import { useEffect, useState } from "react";
import PropTypes from 'prop-types';

PublicRoute.propTypes = {
  children: PropTypes.node,
};

export default function PublicRoute({ children }) {
  
  return (
    <Container>
      <Navbar />
      {children}
      <FloatingDebug/>
    </Container>
  );
}
