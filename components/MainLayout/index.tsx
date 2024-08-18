import React, { useEffect } from "react";
import Head from "next/head";
// import Header from "../Common/Header/Header"
import Header2 from "../Common/Header/Header2";

// Components
// import Header from "../Header/Header";
// import Footer from "../Footer/Footer"; 

// Prop Types
type Props = {
  children: React.ReactNode;
};

const MainLayout = ({ children }: Props) => {
 
  return (
    <React.Fragment>
      <Head>
        <meta name="description" content="WealthView" />
        <link rel="icon" href="/favicon.ico" />
        {/* <link href="https://www.dafontfree.net/embed/a29ibGVuei1zZXJpYWwtZGItcmVndWxhciZkYXRhLzM0L2svMTQwMzU1L2tvYmxlbnotc2VyaWFsLXJlZ3VsYXJkYi50dGY" rel="stylesheet" type="text/css"/> */}
        <title>TaxIt</title>
      </Head>

      <Header2 />

      {children}
      
      
      {/* <Footer /> */}

    

    </React.Fragment>
  );
};

export default MainLayout;