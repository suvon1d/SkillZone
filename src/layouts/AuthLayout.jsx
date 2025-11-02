import React from "react";
import { Outlet } from "react-router";
import NavBar from "../components/NavBar/NavBar";

const AuthLayout = () => {
  return (
    <div>
      <header>
        <NavBar></NavBar>
      </header>
      <main className="md:container mx-auto">
        <Outlet></Outlet>
      </main>
    </div>
  );
};

export default AuthLayout;
