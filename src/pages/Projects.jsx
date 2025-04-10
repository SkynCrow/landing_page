import { Box, Grid2, Paper, Typography } from "@mui/material";
import Proyect from "../components/Proyect";
import gif1 from "../assets/giphy1.webp";
import gif2 from "../assets/giphy2.webp";
import gif3 from "../assets/giphy3.webp";
import gif4 from "../assets/giphy4.webp";
export default function Projects() {

    const projects = [{
        title: "Registro de ventas",
        description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Velit porro ab provident magnam voluptas illum nemo quos delectus vitae debitis quaerat, reprehenderit asperiores saepe qui optio id maiores sed eligendi. Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero omnis a soluta nesciunt amet? Placeat suscipit ipsa excepturi ducimus quaerat. In pariatur quidem unde assumenda magnam repellat culpa harum vero. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum consectetur harum corporis tenetur quasi, amet ipsa doloremque obcaecati, iusto, vero fugit distinctio nostrum dignissimos labore laborum officia at aliquam voluptas. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quam rem id vitae voluptatem amet numquam tenetur cumque, quisquam laboriosam maxime aperiam praesentium quia et iusto provident. Illo officiis vitae ratione. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perspiciatis quisquam nostrum ducimus accusantium excepturi culpa. Fugit, in earum magni animi cum mollitia saepe neque qui hic aliquid, voluptate suscipit repudiandae.",
        url: gif4
    },{
        title: "Vizualizador 3D",
        description: "Proyecto para visualizar de manera web mallas 3D que sean previamente procesadas. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum praesentium perspiciatis soluta eum unde? Nam totam soluta dolore, nisi ipsa, repellat hic nobis sapiente nesciunt eius cumque temporibus alias! Rerum.",
        url: gif2
    },{
        title: "Raster 2D",
        description: "Analisis de datos y muestreo promediado. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maxime doloremque, culpa illo nam sint quis excepturi totam exercitationem quibusdam eos asperiores enim ad adipisci autem repudiandae corrupti minus, eligendi iure. Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus ut labore impedit recusandae in sequi eos repellendus doloremque iusto, cumque vitae sit, similique perferendis veniam assumenda dolorum ab. Recusandae, sunt?",
        url: gif3
    }]
  return (
    <Grid2 container p={2} direction={"column"} width={"80%"} maxWidth={"1280px"} gap={3}>
        {projects.map((project, index) => (
            <Proyect key={index} {...{index:index,...project}} />
        ))}
    </Grid2>
  );
}
