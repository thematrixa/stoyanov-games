package com.gorchovski.stoyanovgames.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.gorchovski.stoyanovgames.model.Product;
import com.gorchovski.stoyanovgames.repository.ProductRepository;

@Transactional
@Service
public class ProductService {

	// @Value(/*ANY NAME GOES HERE FROM APP PROPERTIES"${fb.keystore.etlog.name}"*/)
	// private String eTlogKeystoreName;
	@Autowired
	private ProductRepository productRepository;

	public List<Product> list() {
		return productRepository.findAll();
	}

	public List<Product> getOnSaleProducts() {
		return productRepository.findAllOnSaleProducts();
	}
	
	public void batchInsertUpdate(List<Product> list) {
		this.productRepository.saveAll(list);
	}

	public void truncate() {
		this.productRepository.deleteAll();
	}

}
