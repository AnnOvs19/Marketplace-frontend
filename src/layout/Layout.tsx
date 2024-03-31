import Footer from "@/components/Footer/Footer";
import Headers from "@/components/Headers/Headers";
// import HeaderDesktop from "@/components/Headers/HeaderDesktop/HeaderDesktop";
// import HeaderMobile from "@/components/Headers/HeaderMobile/HeaderMobile";
import React, { FC, useEffect, useState } from "react";

interface IProps {
  children: React.ReactNode;
}

const Layout: FC<IProps> = ({ children }) => {
  return (
    <>
      <Headers />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
