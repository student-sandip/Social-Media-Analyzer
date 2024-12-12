package com.example.demo.controller;

import com.example.demo.model.Post;
import com.example.demo.service.PostService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/posts")
@CrossOrigin(origins = "http://localhost:63342")
public class PostController {

    @Autowired
    private PostService postService;

    // Create a new post
    @PostMapping
    public Post createPost(@RequestBody Post post) {
//        System.out.println("Received Post: " + post);
        return postService.savePost(post);
    }

    // Get all posts
    @GetMapping
    public Iterable<Post> getAllPosts() {

        return postService.getAllPosts();
    }


    // Get post by ID
    @GetMapping("/{id}")
    public Post getPostById(@PathVariable String id) {

        return postService.getPostById(id);
    }

    @PutMapping("/{id}")
    public Post updatePost(@PathVariable String id, @RequestBody Post post) {
        Post existingPost = postService.getPostById(id);
        if (existingPost != null) {
            existingPost.setTitle(post.getTitle());
            existingPost.setContent(post.getContent());
            return postService.savePost(existingPost);
        }
        return null;  // Return null or handle error if post not found
    }

    @DeleteMapping("/{id}")
    public void deletePost(@PathVariable String id) {
        postService.deletePostById(id);
    }

}