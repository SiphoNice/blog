import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export default function Home() {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:3001/posts").then((response) => {
      setPosts(response.data);
    });
  }, []);
  return (
    <>
      <div className="container">
        {posts.map((post, key) => (
          <div className="row" key={post.id}>
            <div className="col-lg-8 col-md-10 mx-auto">
              <div className="post-heading">
                <h2 className="subheading">{post.title}</h2>
                <span className="meta">
                  Posted by <Link to="/" className="text-danger">{post.username}</Link>
                </span>
                <p>
                  <small className="text-danger">{post.createdAt}</small>
                </p>
              </div>
            </div>
            <div className="col-lg-8 col-md-10 mx-auto">
              {post.postDescription}
              <hr />
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
