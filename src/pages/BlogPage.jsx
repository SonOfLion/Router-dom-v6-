import React, { useState, useEffect } from "react";
import { Link, useSearchParams } from "react-router-dom";

import BlogFilter from "./BlogFilter";

function BlogPage() {
  const [posts, setPosts] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();

  const latest = searchParams.has('latest');
  const postQuery = searchParams.get('post') || '';
  const startFrom = latest ? 80 : 1;

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => res.json())
      .then((data) => setPosts(data));
  }, []);

  return (
    <div>
      <h1>Our news</h1>
        <BlogFilter setSearchParams={setSearchParams} latest={latest} postQuery={postQuery} />
      <Link to="/posts/new">Add new post</Link>
      {posts
        .filter(post => post.title.includes(postQuery)&& post.id >= startFrom)
        .map((post) => (
        <Link key={post.id} to={`/posts/${post.id}`}>
          <li>{post.title}</li>
        </Link>
      ))}
    </div>
  );
}

export default BlogPage;
