import { useParams } from "react-router-dom";
import React from "react";

function EditPost() {
  const { id } = useParams();

  return (
    <div>
      <h1>
        Edit Post
        {id}
      </h1>
    </div>
  );
}

export default EditPost;
