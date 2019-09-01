package com.gorchovski.stoyanovgames.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.gorchovski.stoyanovgames.model.Comment;
import com.gorchovski.stoyanovgames.model.User;

public interface CommentRepository extends JpaRepository<Comment, Long>   {
	List<Comment> findByProductId(Integer productId);
	List<Comment> findByUseer(User useer);
	List<Comment> findByProductIdAndUseer(Integer productId, User useer);
}
