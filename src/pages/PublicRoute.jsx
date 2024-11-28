import { Container } from "@mui/material";
import Navbar from "../components/Navbar";
import FloatingDebug from "../components/FloatingDebug";
import { useEffect, useState } from "react";

export default function PublicRoute() {
  const [t,setT] = useState("Hello World");
  useEffect (() => {
    if (window.matchMedia("(orientation: portrait)").matches) {
      setT("Portrait");
    }
    else {
      setT("Landscape");
    }
  }
  ,[]);
  return (
    <Container>
      <Navbar />
      <FloatingDebug text={t} />
    </Container>
  );
}
