import { Link, Outlet } from 'react-router-dom';

import React from 'react';

import "../App.css";

function AboutPage() {
  return (
    <div className="about-us">
      <h1>About us</h1>
      <p>This is demo website about React-router-dom library.</p>
      <ul>
        {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
        <li><Link to="contacts">Orr contacts</Link></li>
        {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
        <li><Link to="team">Our team</Link></li>
      </ul>
      {/* <Routes> */}
      {/*  <Route path="contacts" element={<p>Our contacts</p>}  /> */}
      {/*  <Route path="team" element={<p>Our team</p>}  /> */}
      {/* </Routes> */}
      <Outlet />
    </div>
  );
}

export default AboutPage;
