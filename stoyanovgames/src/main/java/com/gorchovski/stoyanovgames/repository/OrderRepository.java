package com.gorchovski.stoyanovgames.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;
import com.gorchovski.stoyanovgames.model.Order;
import com.gorchovski.stoyanovgames.model.Product;

@Repository
public interface OrderRepository extends JpaRepository<Order, Long>   {

	@Query(value = "SELECT u FROM orders o WHERE o.status = 2", nativeQuery = true)
	List<Product> getConfirmed();

	@Query(value = "SELECT u FROM orders o WHERE o.status = 1", nativeQuery = true)
	List<Product> getUnconfirmed();
	
	@Query(value = "SELECT u FROM orders o WHERE o.status = 3", nativeQuery = true)
	List<Product> getShipped();
	
	@Query(value = "SELECT u FROM orders o WHERE o.status = 4", nativeQuery = true)
	List<Product> getCompleted();
}
