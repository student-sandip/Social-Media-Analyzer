import axios from 'axios';

// Setup Axios default configuration
const api = axios.create({
  baseURL: 'http://localhost:8080', // Backend URL
  headers: {
    'Content-Type': 'application/json',
  }
});

// Fetch all posts
export const getAllPosts = () => {
  return api.get('/posts');
};

// Create a new post
export const createPost = (post) => {
  return api.post('/posts', post);
};

// Get post by ID
export const getPostById = (id) => {
  return api.get(`/posts/${id}`);
};

// Delete post by ID
export const deletePost = (id) => {
  return api.delete(`/posts/${id}`);
};

// Update a post
export const updatePost = (id, post) => {
  return api.put(`/posts/${id}`, post);
};
