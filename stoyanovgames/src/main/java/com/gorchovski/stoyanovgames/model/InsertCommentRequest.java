package com.gorchovski.stoyanovgames.model;

import java.util.Date;

import com.fasterxml.jackson.annotation.JsonFormat;

public class InsertCommentRequest {

	@JsonFormat(shape = JsonFormat.Shape.STRING, pattern = "dd.MM.yyyy")
	private Date date;
	private String content;
	private Integer productId;

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
}
