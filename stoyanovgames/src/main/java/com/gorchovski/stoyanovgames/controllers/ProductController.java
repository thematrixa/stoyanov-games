package com.gorchovski.stoyanovgames.controllers;

import java.io.UnsupportedEncodingException;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.gorchovski.stoyanovgames.excetion.StoyanovGamesValidationException;
import com.gorchovski.stoyanovgames.model.Comment;
import com.gorchovski.stoyanovgames.model.Product;
import com.gorchovski.stoyanovgames.model.requests.HasUserVotedRequest;
import com.gorchovski.stoyanovgames.model.requests.UpdateRatingRequest;
import com.gorchovski.stoyanovgames.model.response.StoyanovGamesResponse;
import com.gorchovski.stoyanovgames.service.ProductService;

@CrossOrigin(origins = "http://localhost:4200", allowedHeaders = "*")
@RestController
@RequestMapping("/products")
public class ProductController {

	private final ProductService productService;

	@Autowired
	public ProductController(ProductService productService) {
		this.productService = productService;
	}

	@RequestMapping(produces = "application/json", method = RequestMethod.GET, value = "/get")
	public StoyanovGamesResponse<?> getProducts() {
		return new StoyanovGamesResponse<>(this.productService.getAllProducts());
	}

	@RequestMapping(produces = "application/json", method = RequestMethod.GET, value = "/get/active")
	public StoyanovGamesResponse<?> getActiveProducts() {
		return new StoyanovGamesResponse<>(this.productService.getActiveProducts());
	}

	@RequestMapping(produces = "application/json", method = RequestMethod.GET, value = "/on-sale")
	public StoyanovGamesResponse<?> getOnSaleProducts() {
		return new StoyanovGamesResponse<>(this.productService.getOnSaleProducts());
	}
	@RequestMapping(produces = "application/json", method = RequestMethod.GET, value = "/new")
	public StoyanovGamesResponse<?> getNewProducts() {
		return new StoyanovGamesResponse<>(this.productService.getNewProducts());
	}

	@PreAuthorize("hasAuthority('ADMIN')")
	@RequestMapping(method = RequestMethod.POST, value = "/batch-update", consumes = "application/json")
	public ResponseEntity<?> uploadProducts(@RequestBody List<Product> list) throws StoyanovGamesValidationException {
		this.productService.batchInsertUpdate(list);
		return new ResponseEntity<>(HttpStatus.NO_CONTENT);
	}

	@PreAuthorize("hasAuthority('ADMIN')")
	@RequestMapping(method = RequestMethod.POST, value = "/update", consumes = "application/json")
	public ResponseEntity<?> updateProduct(@RequestBody Product product) throws StoyanovGamesValidationException {
		this.productService.update(product);
		return new ResponseEntity<>(HttpStatus.NO_CONTENT);
	}

	@PreAuthorize("hasAuthority('ADMIN')")
	@RequestMapping(method = RequestMethod.POST, value = "/delete", consumes = "application/json")
	public ResponseEntity<?> delete(@RequestBody Product product) throws StoyanovGamesValidationException {
		this.productService.delete(product);
		return new ResponseEntity<>(HttpStatus.NO_CONTENT);
	}

	@RequestMapping(method = RequestMethod.POST, value = "/rating/update", consumes = "application/json")
	public StoyanovGamesResponse<?> changeRating(@RequestBody UpdateRatingRequest data)
			throws UnsupportedEncodingException {

		Float rate = this.productService.updateRating(data.getNumberOfStars(), data.getProductId());
		return new StoyanovGamesResponse<>(rate);
	}

	@RequestMapping(method = RequestMethod.POST, value = "/comment/insert", consumes = "application/json")
	public ResponseEntity<?> insertComment(@RequestBody Comment comment)
			throws UnsupportedEncodingException, StoyanovGamesValidationException {
		this.productService.insertComment(comment);
		return new ResponseEntity<>(HttpStatus.NO_CONTENT);
	}

	@RequestMapping(method = RequestMethod.POST, value = "/comment/delete", consumes = "application/json")
	public ResponseEntity<?> deleteComment(@RequestBody Comment comment)
			throws UnsupportedEncodingException, StoyanovGamesValidationException {
		this.productService.deleteComment(comment);
		return new ResponseEntity<>(HttpStatus.NO_CONTENT);
	}

	@RequestMapping(method = RequestMethod.POST, value = "/comments/get", consumes = "application/json")
	public StoyanovGamesResponse<?> getComments(@RequestBody Product product) throws UnsupportedEncodingException {
		return new StoyanovGamesResponse<>(this.productService.getComments(product));
	}

	@RequestMapping(method = RequestMethod.POST, value = "/rating/has-voted", consumes = "application/json")
	public StoyanovGamesResponse<?> getHasUserVoted(@RequestBody HasUserVotedRequest data)
			throws UnsupportedEncodingException {
		return new StoyanovGamesResponse<>(this.productService.hasUserVoted(data.getProductId()));
	}

	@RequestMapping(method = RequestMethod.POST, value = "/comment/has-commented", consumes = "application/json")
	public StoyanovGamesResponse<?> getHasUserCommented(@RequestBody HasUserVotedRequest data)
			throws UnsupportedEncodingException {
		return new StoyanovGamesResponse<>(this.productService.hasUserCommented(data.getProductId()));
	}
}