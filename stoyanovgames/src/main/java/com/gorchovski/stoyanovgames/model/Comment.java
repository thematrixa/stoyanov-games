package com.gorchovski.stoyanovgames.model;

import java.util.Date;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToOne;
import javax.persistence.Table;
import javax.validation.constraints.NotNull;

import com.fasterxml.jackson.annotation.JsonProperty;

@Entity
@Table(name = "comments")
public class Comment {
	@Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
	@JsonProperty("id")
	private Integer id;
	@JsonProperty("date")
	private Date date;
	@NotNull
	@JsonProperty("content")
	private String content;
	@NotNull
	@JsonProperty("productId")
	private Integer productId;
	@NotNull
	@JsonProperty("user")
	@OneToOne
	private User useer;
	@NotNull
	@JsonProperty("rating")
	private Integer rating;
	
	public Integer getId() {
		return id;
	}
	public void setId(Integer id) {
		this.id = id;
	}
	public Date getDate() {
		return date;
	}
	public void setDate(Date date) {
		this.date = date;
	}
	public String getContent() {
		return content;
	}
	public void setContent(String content) {
		this.content = content;
	}
	public Integer getProductId() {
		return productId;
	}
	public void setProductId(Integer productId) {
		this.productId = productId;
	}
	public User getUseer() {
		return useer;
	}
	public void setUseer(User user) {
		this.useer = user;
	}
	public Integer getRating() {
		return rating;
	}
	public void setRating(Integer rating) {
		this.rating = rating;
	}
	
}