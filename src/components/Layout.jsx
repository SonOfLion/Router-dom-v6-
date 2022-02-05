import { Outlet } from "react-router-dom";
import React from 'react';

import CustomLink from "./CustomLink";

function Layout() {
  return (
    <>
      <header className="navigation">
        <CustomLink to="/">Home</CustomLink>
        <CustomLink to="/posts">Blog</CustomLink>
        <CustomLink to="/about">About</CustomLink>
      </header>
      <main className="container">
        <Outlet />
      </main>
      <footer className="footer">2022</footer>
    </>
  );
}

export default Layout;
