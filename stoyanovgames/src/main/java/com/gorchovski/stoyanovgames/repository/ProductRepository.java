package com.gorchovski.stoyanovgames.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.gorchovski.stoyanovgames.model.Product;

@Repository
public interface ProductRepository extends JpaRepository<Product, Long>{

}
