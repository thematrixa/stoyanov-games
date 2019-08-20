package com.gorchovski.stoyanovgames.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.gorchovski.stoyanovgames.model.Product;

@Repository
public interface ProductRepository extends JpaRepository<Product, Long>  {
	Product findById(Integer productId);
	List<Product> findByIsActiveAndIsDeleted(Boolean isActive, Boolean isDeleted);
	List<Product> findByIsDeleted(Boolean isDeleted);
    List<Product> findByOnSalePercentGreaterThan(Integer onSalePercent);
}
