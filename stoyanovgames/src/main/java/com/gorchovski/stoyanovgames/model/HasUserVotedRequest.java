package com.gorchovski.stoyanovgames.model;

public class HasUserVotedRequest {
	
	private String username;
	private Integer productId;
	public String getUsername() {
		return username;
	}
	public void setUsername(String username) {
		this.username = username;
	}
	public Integer getProductId() {
		return productId;
	}
	public void setProductId(Integer productId) {
		this.productId = productId;
	}
	
}
