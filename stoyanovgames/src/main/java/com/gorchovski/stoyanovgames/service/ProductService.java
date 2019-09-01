package com.gorchovski.stoyanovgames.service;

import java.util.Calendar;
import java.util.Date;
import java.util.Iterator;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.gorchovski.stoyanovgames.excetion.StoyanovGamesValidationException;
import com.gorchovski.stoyanovgames.model.Category;
import com.gorchovski.stoyanovgames.model.Comment;
import com.gorchovski.stoyanovgames.model.Product;
import com.gorchovski.stoyanovgames.model.User;
import com.gorchovski.stoyanovgames.model.Votes;
import com.gorchovski.stoyanovgames.repository.CategoryRepository;
import com.gorchovski.stoyanovgames.repository.ProductRepository;
import com.gorchovski.stoyanovgames.utils.Constants;
import com.gorchovski.stoyanovgames.validator.ProductValidator;

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

	@Autowired
	private CategoryRepository categoryRepository;

	@Autowired
	private SecurityService securityService;

	@Autowired
	private ProductValidator productValidator;

	public List<Product> getAllProducts() {
		return productRepository.findByIsDeleted(false);
	}

	public List<Product> getActiveProducts() {
		return productRepository.findByIsActiveAndIsDeleted(true, false);
	}

	public List<Product> getOnSaleProducts() {
		return productRepository.getOnSaleProducts();
	}

	public List<Product> getNewProducts() {
		Calendar cal = Calendar.getInstance();
		cal.add(Calendar.MONTH, -Constants.NEW_PRODUCT_MONTHS_BACK);
		Date oneMonthBack = cal.getTime();
		return productRepository.getNewProducts(oneMonthBack);
	}

	public void batchInsertUpdate(List<Product> feProducts) throws StoyanovGamesValidationException {
		List<Product> dbProducts = productRepository.findAll();
		boolean productExists = false;
		for (Iterator<Product> db = dbProducts.iterator(); db.hasNext();) {
			Product dbProduct = db.next();
			for (Iterator<Product> fe = feProducts.iterator(); fe.hasNext();) {
				Product feProduct = fe.next();
				this.productValidator.validateProduct(feProduct);
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

	public void delete(Product product) throws StoyanovGamesValidationException {
		this.productValidator.validateProduct(product);
		this.deleteComments(product.getId());
		this.votesService.deleteVotes(product.getId());
		product.setIsDeleted(true);
		product.setIsActive(false);
		this.productRepository.save(product);
	}

	public void update(Product product) throws StoyanovGamesValidationException {
		Category category = this.categoryRepository.findById(product.getCategory().getId());
		product.setCategory(category);
		this.productValidator.validateProduct(product);
		product.setIsDeleted(false);
		this.productRepository.save(product);
	}

	public Float updateRating(Integer numberOfStars, Integer productId) {
		User user = this.securityService.findLoggedInUser();
		boolean hasUserVoted = this.votesService.hasUserVoted(user, productId);
		Product product = this.productRepository.findById(productId);
		if (hasUserVoted) {
			return product.getRating();
		} else {
			this.updateStars(product, numberOfStars);
			Float rating = this.calculateRating(product);
			product.setRating(rating);
			this.productRepository.save(product);
			Votes vote = new Votes(productId, user);
			this.votesService.insertVote(vote);
			return rating;
		}

	}

	public Boolean hasUserVoted(Integer productId) {
		User user = this.securityService.findLoggedInUser();
		return this.votesService.hasUserVoted(user, productId);
	}

	public Boolean hasUserCommented(Integer productId) {
		User user = this.securityService.findLoggedInUser();
		return this.commentService.hasUserCommented(user, productId);
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

	public void insertComment(Comment comment) throws StoyanovGamesValidationException {
		User user = this.securityService.findLoggedInUser();
		comment.setDate(new Date());
		comment.setUseer(user);
		if (this.votesService.hasUserVoted(user, comment.getProductId())
				&& !this.commentService.hasUserCommented(user, comment.getProductId())) {
			this.commentService.insertComment(comment);
		} else {

		}
	}

	public void deleteComments(Integer productId) {
		this.commentService.deleteCommentsByProductId(productId);
	}

	public void deleteComment(Comment comment) throws StoyanovGamesValidationException {
		this.commentService.deleteComment(comment);
	}

	public List<Comment> getComments(Product product) {
		return this.commentService.selectAllByProductId(product.getId());
	}
}
