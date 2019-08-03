package com.gorchovski.stoyanovgames.service;

import java.util.Iterator;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.gorchovski.stoyanovgames.model.News;
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
		this.productRepository.delete(product);
	}
	
	public void update(Product product) {
		this.productRepository.save(product);
	}
	

}
