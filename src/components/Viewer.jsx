import { Paper } from "@mui/material";
import { Canvas } from "@react-three/fiber";
// import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader'
import { Environment, OrbitControls } from "@react-three/drei";
import { Html, useProgress } from '@react-three/drei'

import { useLoader } from "@react-three/fiber";
import { Suspense } from "react";
export default function Viewer() {
  const Model = () => {
    const obj = useLoader(OBJLoader, "./object.obj");
    console.log(obj);
    return (
      <>
        <primitive object={obj} scale={0.4} position={[0,0,0]} />
      </>
    );
  };
  function Loader() {
    const { progress } = useProgress()
    return <Html center>{progress} % loaded</Html>
  }
  return (
    <Paper  sx={{ p: 2,height: "500px",borderRadius: 3 }}>
      <h1>3D Viewer</h1>
      <div id="canvas-container" style={{ height: "80%" }}>
        <Canvas>
          <Suspense fallback={<Loader />}>
            <ambientLight />
            <Model />
            <OrbitControls />
            <Environment preset="sunset" background />
          </Suspense>
        </Canvas>
      </div>
    </Paper>
  );
}
