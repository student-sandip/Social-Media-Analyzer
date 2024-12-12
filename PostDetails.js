import React, { useEffect, useState } from 'react';
import { getPostById, deletePost } from '../services/api';
import { useParams, useHistory } from 'react-router-dom';

const PostDetail = () => {
  const { id } = useParams(); // Get post ID from URL
  const [post, setPost] = useState(null);
  const history = useHistory();

  useEffect(() => {
    // Fetch the post by ID
    getPostById(id)
      .then(response => {
        setPost(response.data);
      })
      .catch(error => {
        console.error('Error fetching the post details!', error);
      });
  }, [id]);

  const handleDelete = () => {
    deletePost(id)
      .then(() => {
        alert('Post deleted');
        history.push('/'); // Redirect to homepage
      })
      .catch(error => {
        console.error('Error deleting the post!', error);
      });
  };

  return (
    <div>
      {post ? (
        <div>
          <h1>{post.title}</h1>
          <p>{post.content}</p>
          <button onClick={handleDelete}>Delete Post</button>
        </div>
      ) : (
        <p>Loading post...</p>
      )}
    </div>
  );
};

export default PostDetail;
