package com.gorchovski.stoyanovgames.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.gorchovski.stoyanovgames.model.CartItem;
import com.gorchovski.stoyanovgames.model.Order;
import com.gorchovski.stoyanovgames.model.OrdersEnum;
import com.gorchovski.stoyanovgames.model.Product;
import com.gorchovski.stoyanovgames.repository.OrderRepository;
import com.gorchovski.stoyanovgames.repository.ProductRepository;

@Transactional
@Service
public class OrderService {

	// @Value(/*ANY NAME GOES HERE FROM APP PROPERTIES"${fb.keystore.etlog.name}"*/)
	// private String eTlogKeystoreName;
	@Autowired
	private OrderRepository orderRepository;
	
	@Autowired
	private ProductRepository productRepository;

	public List<Order> list() {
		return orderRepository.findAll();
	}
	
	public List<Order> listUnconfirmed() {
		return orderRepository.getOrderByStatus(OrdersEnum.UNCONFIRMED);
	}
	
	public List<Order> listConfirmed() {
		return orderRepository.getOrderByStatus(OrdersEnum.CONFIRMED);
	}
	
	public List<Order> listShipped() {
		return orderRepository.getOrderByStatus(OrdersEnum.SHIPPED);
	}
	
	public List<Order> listCompleted() {
		return orderRepository.getOrderByStatus(OrdersEnum.COMPLETED);
	}

	public void batchInsertUpdate(List<Order> list) {
		this.orderRepository.saveAll(list);
	}
	
	public void update(Order order) {
		this.refreshProductQuantities(order.getCartItems());
		this.orderRepository.save(order);
	}

	public void truncate() {
		this.orderRepository.deleteAll();
	}
	
	public void refreshProductQuantities(List<CartItem> cartItems) {
		for(CartItem ci : cartItems) {
			Product product = ci.getProduct();
			product.setQuantity(product.getQuantity()-ci.getQuantity());
			this.productRepository.save(product);
		}
	}
}
