package com.gorchovski.stoyanovgames.model;

import java.util.Date;
import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToMany;
import javax.persistence.Table;
import javax.persistence.Transient;
import javax.validation.constraints.NotNull;

import com.fasterxml.jackson.annotation.JsonFormat;

@Entity
@Table(name = "orders")
public class Order {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Integer id;
	@NotNull
	private Integer userId;
	@NotNull
	private String name;
	@NotNull
	private String address;
	@JsonFormat(shape = JsonFormat.Shape.STRING, pattern = "dd.MM.yyyy HH:mm:ss")
	private Date date;
	@NotNull
	private String phone;
	@NotNull
	private Float total;
	@ManyToMany(cascade = { CascadeType.PERSIST, CascadeType.MERGE })
	private List<CartItem> cartItems;
	@Transient
	private Boolean showProducts;
	@Enumerated(EnumType.ORDINAL)
	@NotNull
	private OrdersEnum status;
	public Integer getId() {
		return id;
	}
	public void setId(Integer id) {
		this.id = id;
	}
	public Integer getUserId() {
		return userId;
	}
	public void setUserId(Integer userId) {
		this.userId = userId;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public String getAddress() {
		return address;
	}
	public void setAddress(String address) {
		this.address = address;
	}
	public Date getDate() {
		return date;
	}
	public void setDate(Date date) {
		this.date = date;
	}
	public String getPhone() {
		return phone;
	}
	public void setPhone(String phone) {
		this.phone = phone;
	}
	public Float getTotal() {
		return total;
	}
	public void setTotal(Float total) {
		this.total = total;
	}
	public List<CartItem> getCartItems() {
		return cartItems;
	}
	public void setProducts(List<CartItem> cartItems) {
		this.cartItems = cartItems;
	}
	public Boolean getShowProducts() {
		return showProducts;
	}
	public void setShowProducts(Boolean showProducts) {
		this.showProducts = showProducts;
	}
	public OrdersEnum getStatus() {
		return status;
	}
	public void setStatus(OrdersEnum status) {
		this.status = status;
	}

}
