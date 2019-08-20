package com.gorchovski.stoyanovgames.service;

import java.util.Iterator;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.gorchovski.stoyanovgames.excetion.StoyanovGamesValidationException;
import com.gorchovski.stoyanovgames.model.CartItem;
import com.gorchovski.stoyanovgames.model.Order;
import com.gorchovski.stoyanovgames.model.Product;
import com.gorchovski.stoyanovgames.model.enums.OrdersEnum;
import com.gorchovski.stoyanovgames.repository.OrderRepository;
import com.gorchovski.stoyanovgames.repository.ProductRepository;
import com.gorchovski.stoyanovgames.utils.RoundUpFloatsUtil;
import com.gorchovski.stoyanovgames.validator.OrderValidator;

@Transactional
@Service
public class OrderService {

	// @Value(/*ANY NAME GOES HERE FROM APP PROPERTIES"${fb.keystore.etlog.name}"*/)
	// private String eTlogKeystoreName;
	@Autowired
	private OrderRepository orderRepository;

	@Autowired
	private ProductRepository productRepository;
	
	@Autowired
	private OrderValidator orderValidator;

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

	public List<Order> listDiscarded() {
		return orderRepository.getOrderByStatus(OrdersEnum.DISCARDED);
	}

	public void batchInsertUpdate(List<Order> feOrders) throws StoyanovGamesValidationException {
		List<Order> dbOrders = orderRepository.findAll();
		boolean newsExists = false;
		for (Iterator<Order> db = dbOrders.iterator(); db.hasNext();) {
			Order dbOrder = db.next();
			for (Iterator<Order> fe = feOrders.iterator(); fe.hasNext();) {
				Order feOrder = fe.next();
				orderValidator.validateOrder(feOrder);
				if (dbOrder.getId().equals(feOrder.getId())) {
					newsExists = true;
				}
			}
			if (!newsExists) {
				orderRepository.delete(dbOrder);
			}
			newsExists = false;
		}
		orderRepository.saveAll(feOrders);
		
	}
	
	public void update(Order order) throws StoyanovGamesValidationException {
		orderValidator.validateOrder(order);
		order.setTotal(this.calculateOrderTotal(order.getCartItems()));
		this.orderRepository.save(order);
	}
	
	
	public void insert(Order order) throws StoyanovGamesValidationException {
		orderValidator.validateOrder(order);
		this.refreshProductQuantities(order.getCartItems());
		order.setTotal(this.calculateOrderTotal(order.getCartItems()));
		this.orderRepository.save(order);
	}

	public void updateOrderStatus(Order order) throws StoyanovGamesValidationException {
		orderValidator.validateOrder(order);
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
	
	public Float calculateOrderTotal(List<CartItem> cartItems) {
		Float totalPrice = new Float(0);
		for(CartItem ci : cartItems) {
			Product p = ci.getProduct();
			if(p.getOnSalePercent() > 0) {
				totalPrice += RoundUpFloatsUtil.round((p.getPrice() * p.getOnSalePercent() / 100),2)* ci.getQuantity();
			}else {
				totalPrice += p.getPrice() * ci.getQuantity();
			}
			
		}
		return RoundUpFloatsUtil.round(totalPrice, 2);
	}
}
