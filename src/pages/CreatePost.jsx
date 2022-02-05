import React from 'react';
import { useNavigate } from "react-router-dom";
import useAuth from "../hook/useAuth";

function CreatePost() {
  const { signOut } = useAuth();
  const navigate = useNavigate();

  return (
    <div>
      <h1>Create Post</h1>
      <button type="button" onClick={() => navigate('/', { replace: true })}>Log Out</button>
    </div>
  );
}

export default CreatePost;
