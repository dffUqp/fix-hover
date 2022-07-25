import React from "react";
import Footer from "./Footer";
// import styles from "./Layout.module.scss";
import { Outlet } from "react-router-dom";
import Header from "./Header";

function Layout() {
  return (
    <>
      <Header />

      <main>
          {/* <button>fdgsgdsg</button> */}
          <Outlet />
      </main>

      <Footer />
      {/* 26.06.2022 */}
    </>
  );
}

export default Layout;
