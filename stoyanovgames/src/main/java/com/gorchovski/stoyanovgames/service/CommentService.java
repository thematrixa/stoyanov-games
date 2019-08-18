package com.gorchovski.stoyanovgames.service;

import java.util.Date;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.gorchovski.stoyanovgames.excetion.StoyanovGamesValidationException;
import com.gorchovski.stoyanovgames.model.Comment;
import com.gorchovski.stoyanovgames.model.User;
import com.gorchovski.stoyanovgames.repository.CommentRepository;
import com.gorchovski.stoyanovgames.repository.UserRepository;
import com.gorchovski.stoyanovgames.validator.CommentValidator;

@Transactional
@Service
public class CommentService {

	@Autowired
	private CommentRepository commentRepository;

	@Autowired
	private SecurityService securityService;
	
	@Autowired
	private CommentValidator commentValidator;

	public List<Comment> selectAll() {
		return commentRepository.findAll();
	}

	public List<Comment> selectAllByProductId(Integer productId) {
		return commentRepository.findByProductId(productId);
	}

	public List<Comment> selectAllByUsername(String username) {
		return commentRepository.findByUsername(username);
	}
	
	public void insertComment(Comment comment) throws StoyanovGamesValidationException {
		this.commentValidator.validateComment(comment);
		User user = this.securityService.findLoggedInUser();
		comment.setDate(new Date());
		comment.setUsername(user.getUsername());
		this.commentRepository.save(comment);
	}
	
	public void deleteComment(Comment comment) throws StoyanovGamesValidationException {
		this.commentValidator.validateComment(comment);
		this.commentRepository.delete(comment);
	}
	public void deleteCommentsByProductId(Integer productId) {
		List<Comment> comments = this.selectAllByProductId(productId);
		this.commentRepository.deleteAll(comments);
	}

	public void deleteCommentsByUsername(String username) {
		List<Comment> comments = this.selectAllByUsername(username);
		this.commentRepository.deleteAll(comments);
	}
	
	public Boolean hasUserCommented(String username, Integer productId) {
		List<Comment> comments = this.commentRepository.findByProductIdAndUsername(productId, username);
		if(comments.size()>0) {
			return true;
		}else {
			return false;
		}
		
	}
}
