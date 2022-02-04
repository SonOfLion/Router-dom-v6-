import React from 'react';
import { Routes, Route } from "react-router-dom";

import HomePage from "./pages/HomePage";
import Layout from "./components/Layout";
import AboutPage from "./pages/AboutPage";
import BlogPage from "./pages/BlogPage";
import NotFoundPage from "./pages/NotFoundPage";
import SinglePage from "./pages/SinglePage";
import CreatePost from "./pages/CreatePost";
import EditPost from "./pages/EditPost";

import "./App.css";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={ <Layout /> } >
          <Route index element={<HomePage />} />
          <Route path="posts" element={<BlogPage />} />
          <Route path="posts/:id" element={<SinglePage />} />
          <Route path="posts/:id/edit" element={<EditPost />} />
          <Route path="posts/new" element={<CreatePost />}  />
          <Route path="about" element={<AboutPage />} />
          <Route path="*" element={<NotFoundPage />}  />
        </Route>
      </Routes>
    </>
  );
};

export default App;
