package com.gorchovski.stoyanovgames.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.gorchovski.stoyanovgames.model.Order;
import com.gorchovski.stoyanovgames.model.OrdersEnum;

@Repository
public interface OrderRepository extends JpaRepository<Order, Long>   {

	@Query(value = "SELECT o FROM Order o WHERE o.status = :status")
	List<Order> getOrderByStatus(@Param("status") OrdersEnum status);

	/*@Query(value = "SELECT o FROM Order o WHERE o.status = 'COMPLETED'", nativeQuery = true)
	List<Order> getUnconfirmed();
	
	@Query(value = "SELECT o FROM Order o WHERE o.status = 'COMPLETED'", nativeQuery = true)
	List<Order> getShipped();
	
	@Query(value = "SELECT o FROM Order o WHERE o.status = 'COMPLETED'", nativeQuery = true)
	List<Order> getCompleted();*/
}
