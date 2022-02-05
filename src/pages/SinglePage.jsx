import { useParams, Link, useNavigate } from "react-router-dom";
import React, { useState, useEffect } from "react";

function SinglePage() {
  const { id } = useParams();

  const navigate = useNavigate();

  const [post, setPost] = useState(null);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then((res) => res.json())
      .then((data) => setPost(data));
  }, [id]);

  const goBack = () => navigate(-1);

  return (
    <div>
      <button type="button" onClick={goBack}>
        Go back
      </button>
      {post && (
        <>
          <h1>{post.title}</h1>
          <p>{post.body}</p>
          <Link to={`/posts/${id}/edit`}>Edit this post</Link>
        </>
      )}
    </div>
  );
}

export default SinglePage;
