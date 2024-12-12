package com.example.demo.exception;

public class PostNotFoundException extends RuntimeException{
    public PostNotFoundException(String id) {
        super("Post not found with ID: " + id);
    }
}
