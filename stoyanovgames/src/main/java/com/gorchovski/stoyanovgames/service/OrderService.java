package com.gorchovski.stoyanovgames.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.gorchovski.stoyanovgames.model.Order;
import com.gorchovski.stoyanovgames.repository.OrderRepository;

@Service
public class OrderService {

    //@Value(/*ANY NAME GOES HERE FROM APP PROPERTIES"${fb.keystore.etlog.name}"*/)
    //private String eTlogKeystoreName;
	@Autowired
    private OrderRepository orderRepository;
 
    public List<Order> list() {
        return orderRepository.findAll();
    }

}
