import React, { useState, useEffect } from "react";

function App() {
  const [post, setPost] = useState(null);

  useEffect(() => {
    // Fetch single post
    fetch("https://jsonplaceholder.typicode.com/posts/1")
      .then((response) => response.json())
      .then((data) => setPost(data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      <h1>Single Post</h1>
      {post ? (
        <div
          style={{
            border: "1px solid #ccc",
            borderRadius: "8px",
            padding: "15px",
            background: "#f9f9f9"
          }}
        >
          <p><strong>ID:</strong> {post.id}</p>
          <p><strong>UserID:</strong> {post.userId}</p>
          <h3>{post.title}</h3>
          <p>{post.body}</p>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default App;
