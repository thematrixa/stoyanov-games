package com.gorchovski.stoyanovgames.service;

import java.util.Iterator;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.gorchovski.stoyanovgames.model.Comment;
import com.gorchovski.stoyanovgames.model.Product;
import com.gorchovski.stoyanovgames.model.Votes;
import com.gorchovski.stoyanovgames.repository.ProductRepository;

@Transactional
@Service
public class ProductService {

	// @Value(/*ANY NAME GOES HERE FROM APP PROPERTIES"${fb.keystore.etlog.name}"*/)
	// private String eTlogKeystoreName;
	@Autowired
	private ProductRepository productRepository;

	@Autowired
	private VotesService votesService;
	
	@Autowired
	private CommentService commentService;

	public List<Product> list() {
		return productRepository.findAll();
	}

	public void batchInsertUpdate(List<Product> feProducts) {
		List<Product> dbProducts = productRepository.findAll();
		boolean productExists = false;
		for (Iterator<Product> db = dbProducts.iterator(); db.hasNext();) {
			Product dbProduct = db.next();
			for (Iterator<Product> fe = feProducts.iterator(); fe.hasNext();) {
				Product feProduct = fe.next();
				if (dbProduct.getId().equals(feProduct.getId())) {
					productExists = true;
				}
			}
			if (!productExists) {
				productRepository.delete(dbProduct);
			}
			productExists = false;
		}
		productRepository.saveAll(feProducts);
	}

	public void truncate() {
		this.productRepository.deleteAll();
	}

	public void delete(Product product) {
		this.deleteComments(product.getId());
		this.votesService.deleteVotes(product.getId());
		this.productRepository.delete(product);
	}

	public void update(Product product) {
		this.productRepository.save(product);
	}

	public Float updateRating(Integer numberOfStars, String username, Integer productId) {
		boolean hasUserVoted = this.votesService.hasUserVoted(username, productId);
			Product product = this.productRepository.findById(productId);
		if (hasUserVoted) {
			return product.getRating();
		} else {
			this.updateStars(product, numberOfStars);
			Float rating = this.calculateRating(product);
			product.setRating(rating);
			this.productRepository.save(product);
			Votes vote = new Votes(productId, username);
			this.votesService.insertVote(vote);
			return rating;
		}

	}

	public void updateStars(Product product, Integer numberOfStars) {
		if (numberOfStars == 1) {
			product.setOne_stars(product.getOne_stars() + 1);
		} else if (numberOfStars == 2) {
			product.setTwo_stars(product.getTwo_stars() + 1);
		} else if (numberOfStars == 3) {
			product.setThree_stars(product.getThree_stars() + 1);
		} else if (numberOfStars == 4) {
			product.setFour_stars(product.getFour_stars() + 1);
		} else if (numberOfStars == 5) {
			product.setFive_stars(product.getFive_stars() + 1);
		}
	}

	public Float calculateRating(Product product) {
		Integer five = product.getFive_stars();
		Integer four = product.getFour_stars();
		Integer three = product.getThree_stars();
		Integer two = product.getTwo_stars();
		Integer one = product.getOne_stars();

		return (float) ((5 * five + 4 * four + 3 * three + 2 * two + 1 * one) / (five + four + three + two + one));
	}
	
	public void insertComment(Comment comment) {
		this.commentService.insertComment(comment);
	}
	public void deleteComments(Integer productId) {
		this.commentService.deleteCommentsByProductId(productId);
	}
	public List<Comment> getComments(Product product) {
		return this.commentService.selectAllByProductId(product.getId());
	}
}
