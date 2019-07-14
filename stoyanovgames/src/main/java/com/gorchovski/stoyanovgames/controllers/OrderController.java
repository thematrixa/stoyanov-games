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

import com.gorchovski.stoyanovgames.model.Order;
import com.gorchovski.stoyanovgames.model.StoyanovGamesResponse;
import com.gorchovski.stoyanovgames.service.OrderService;

@CrossOrigin(origins = "http://localhost:4200", allowedHeaders = "*")
@RestController
@RequestMapping("/orders")
public class OrderController {

	private final OrderService orderService;

	@Autowired
	public OrderController(OrderService orderService) {
		this.orderService = orderService;
	}

	@RequestMapping(produces = "application/json", method = RequestMethod.GET, value = "/get")
	public StoyanovGamesResponse<?> getOrders() {
		return new StoyanovGamesResponse<>(this.orderService.list());
	}

	@RequestMapping(method = RequestMethod.POST, value = "/update", consumes="application/json")
	public ResponseEntity<?> uploadOrder(
			@RequestBody Order order) {
		this.orderService.update(order);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
	}
	
	@RequestMapping(method = RequestMethod.POST, value = "/batch-update", consumes="application/json")
	public ResponseEntity<?> uploadOrders(
			@RequestBody List<Order> orders) {
		this.orderService.batchInsertUpdate(orders);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
	}
}