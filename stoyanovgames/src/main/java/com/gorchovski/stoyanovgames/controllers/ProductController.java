package com.gorchovski.stoyanovgames.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.gorchovski.stoyanovgames.model.Product;
import com.gorchovski.stoyanovgames.model.StoyanovGamesResponse;
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
		return new StoyanovGamesResponse<>(this.productService.list());
	}

	@RequestMapping(produces = "application/json", method = RequestMethod.GET, value = "/on-sale")
	public StoyanovGamesResponse<?> getOnSaleProducts() {
		return new StoyanovGamesResponse<>(this.productService.list());
	}
	
	@RequestMapping(produces = "application/json", method = RequestMethod.GET, value = "/on-sale/update")
	public StoyanovGamesResponse<?> updateProducts() {
		return new StoyanovGamesResponse<>(this.productService.list());
	}
	
	@RequestMapping(method = RequestMethod.POST, value = "/batch-update", consumes="application/json")
	public ResponseEntity<?> uploadProducts(
			@RequestBody List<Product> list) {
		this.productService.truncate();
		this.productService.batchInsertUpdate(list);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
	}
	
	@RequestMapping(method = RequestMethod.POST, value = "/update", consumes="application/json")
	public ResponseEntity<?> updateProduct(
			@RequestBody Product product) {
		this.productService.update(product);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
	}
	
	@RequestMapping(method = RequestMethod.POST, value = "/delete", consumes="application/json")
	public ResponseEntity<?> delete(
			@RequestBody Product product) {
		this.productService.delete(product);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
	}
	
}