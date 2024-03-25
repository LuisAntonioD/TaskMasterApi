import AboutSectionOne from "@/components/About/AboutSectionOne";
import AboutSectionTwo from "@/components/About/AboutSectionTwo";
import Breadcrumb from "@/components/Common/Breadcrumb";

import { Metadata } from "next";
import BlogSidebarPage from "../blog-sidebar/page";

export const metadata: Metadata = {
  title: "About - TaskMaster",
  description: "Hola",
  // other metadata
};

const AboutPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="Como usar nuestra api"
        description="taskMasterApi se puede utilizar con cualquier tipo de proyecto que necesite tareas y usuarios en formato JSON. ¡Puedes usar los ejemplos a continuación para comprobar cómo funciona taskMasterApi y siéntete libre de disfrutarlo en tus increíbles proyectos!"
      />
      <BlogSidebarPage />


    </>
  );
};

export default AboutPage;
