import React, { useEffect, useRef } from "react";
import vtkFullScreenRenderWindow from "@kitware/vtk.js/Rendering/Misc/FullScreenRenderWindow";
import vtkActor from "@kitware/vtk.js/Rendering/Core/Actor";
import vtkMapper from "@kitware/vtk.js/Rendering/Core/Mapper";
import vtkXMLPolyDataReader from "@kitware/vtk.js/IO/XML/XMLPolyDataReader";
import "@kitware/vtk.js/Rendering/Profiles/Geometry"; // Perfil necesario para geometrías

const VTKVTPViewer = ({ fileUrl }) => {
  const containerRef = useRef(null);

  useEffect(() => {
    // Crear el renderizador de pantalla completa
    const fullScreenRenderWindow = vtkFullScreenRenderWindow.newInstance({
      rootContainer: containerRef.current,
      background: [0.2, 0.3, 0.4], // Color de fondo
    });

    const renderer = fullScreenRenderWindow.getRenderer();
    const renderWindow = fullScreenRenderWindow.getRenderWindow();

    // Leer el archivo VTP
    const reader = vtkXMLPolyDataReader.newInstance();
    reader.setUrl(fileUrl).then(() => {
      const polyData = reader.getOutputData(0);
      if (!polyData) {
        console.error("No se pudo cargar el archivo VTP.");
        return;
      }

      const mapper = vtkMapper.newInstance();
      mapper.setInputData(polyData);

      const actor = vtkActor.newInstance();
      actor.setMapper(mapper);

      renderer.addActor(actor);
      renderer.resetCamera();
      renderWindow.render();
    }).catch((error) => {
      console.error("Error al cargar el archivo VTP:", error);
    });

    // Cleanup al desmontar el componente
    return () => {
      fullScreenRenderWindow.delete();
    };
  }, [fileUrl]);

  return (
    <div
      ref={containerRef}
      style={{
        width: "100%",
        height: "100vh",
        position: "relative",
      }}
    />
  );
};

export default VTKVTPViewer;
