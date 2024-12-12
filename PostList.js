import React, { useEffect, useState } from 'react';
import { getAllPosts } from '../services/api';

const PostList = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch posts when the component mounts
    getAllPosts()
      .then(response => {
        setPosts(response.data);
        setLoading(false);
      })
      .catch(error => {
        console.error('There was an error fetching the posts!', error);
        setLoading(false);
      });
  }, []);

  return (
    <div>
      <h1>All Posts</h1>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div>
          {posts.map(post => (
            <div key={post.id}>
              <h2>{post.title}</h2>
              <p>{post.content.substring(0, 100)}...</p>
              <a href={`/posts/${post.id}`}>Read more</a>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default PostList;
