package com.gorchovski.stoyanovgames.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.gorchovski.stoyanovgames.model.Order;
import com.gorchovski.stoyanovgames.repository.OrderRepository;

@Transactional
@Service
public class OrderService {

	// @Value(/*ANY NAME GOES HERE FROM APP PROPERTIES"${fb.keystore.etlog.name}"*/)
	// private String eTlogKeystoreName;
	@Autowired
	private OrderRepository orderRepository;

	public List<Order> list() {
		return orderRepository.findAll();
	}

	public void batchInsertUpdate(List<Order> list) {
		this.orderRepository.saveAll(list);
	}
	
	public void update(Order order) {
		this.orderRepository.save(order);
	}

	public void truncate() {
		this.orderRepository.deleteAll();
	}
}
