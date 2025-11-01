import React from "react";
import NavBar from "../components/NavBar/NavBar";
import { Outlet } from "react-router";
import Footer from "../components/Footer/Footer";

const HomeLayout = () => {
  return (
    <div>
      <header className="mb-0">
        <NavBar></NavBar>
      </header>
      <main>
        <Outlet></Outlet>
      </main>
      <footer>
        <Footer></Footer>
      </footer>
    </div>
  );
};

export default HomeLayout;
