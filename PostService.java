package com.example.demo.service;

import java.util.List;

import com.example.demo.exception.PostNotFoundException;
import com.example.demo.model.Post;
import com.example.demo.repository.PostRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class PostService {

    @Autowired
    private PostRepository postRepository;

    // Save a post
    public Post savePost(Post post) {
        return postRepository.save(post);
    }

    // Get all posts
    public Iterable<Post> getAllPosts() {
        return postRepository.findAll();
    }

    // Find post by ID
//    public Post getPostById(String id) {
//        return postRepository.findById(id).orElse(null);
//    }

    public Post getPostById(String id) {
        return postRepository.findById(id).orElseThrow(() -> new PostNotFoundException(id));
    }



    public void deletePostById(String id) {
        postRepository.deleteById(id);
    }

//    Add a method in PostService to count the total number of posts.
    public long getTotalPostsCount() {
        return postRepository.count();
    }


    public List<Post> findPostsByKeyword(String keyword) {
        return postRepository.findByTitleContainingOrContentContaining(keyword, keyword);
    }

}

