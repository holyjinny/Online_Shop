import React from "react";
import "./Header.css";
import Head from "./Head";
import Navbar from "./Navbar";
import Search from "./Search";
import { useLocation } from "react-router-dom";

const Header = () => {
  const { pathname } = useLocation();

  if (pathname === "/login") return null;
  return (
    <>
      <Head />
      <Search />
      <Navbar />
    </>
  );
};

export default Header;
