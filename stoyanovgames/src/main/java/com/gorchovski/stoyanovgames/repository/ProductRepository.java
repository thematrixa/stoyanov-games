package com.gorchovski.stoyanovgames.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.gorchovski.stoyanovgames.model.Product;

@Repository
public interface ProductRepository extends JpaRepository<Product, Long>{
	
	@Query(value = "SELECT u FROM products p WHERE p.onsalepercent > 0", nativeQuery = true)
	List<Product> findAllOnSaleProducts();
	
}
