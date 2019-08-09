package com.gorchovski.stoyanovgames.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.gorchovski.stoyanovgames.model.Comment;

public interface CommentRepository extends JpaRepository<Comment, Long>   {
	List<Comment> findByProductId(Integer productId);
	List<Comment> findByUsername(String username);
	List<Comment> findByProductIdAndUsername(Integer productId, String username);
}
