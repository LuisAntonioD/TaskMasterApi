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
        pageName="How to use our API"
        description="taskMasterApi can be used with any type of project that needs tasks and users in JSON format. You can use the examples below to check how the taskMasterApi works and feel free to enjoy it in your awesome projects!"
      />
      <BlogSidebarPage />


    </>
  );
};

export default AboutPage;
