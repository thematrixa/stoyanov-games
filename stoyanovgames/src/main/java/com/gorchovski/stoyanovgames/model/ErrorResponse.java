package com.gorchovski.stoyanovgames.model;

import java.util.Date;
import java.util.List;

import com.fasterxml.jackson.annotation.JsonFormat;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

@JsonIgnoreProperties({ "httpCode" })
public class ErrorResponse {
	
	private String messageText;
	private StatusEnum adviceStatus;
	@JsonFormat(shape = JsonFormat.Shape.STRING, pattern = "yyyy-MM-dd'T'HH:mm:ss")
	private Date timestamp;
	private Short status;
	private List<ValidationErrorField> errors;
	private Short httpCode;

	public static ErrorResponse buildFromException(Exception exception) {
		ErrorResponse response = new ErrorResponse();
		response.setadviceStatus(StatusEnum.ERROR);
		response.setMessageText(exception.getMessage());
		return response;
	}

	public String getMessageText() {
		return messageText;
	}

	public void setMessageText(String messageText) {
		this.messageText = messageText;
	}

	public StatusEnum getadviceStatus() {
		return adviceStatus;
	}

	public void setadviceStatus(StatusEnum adviceStatus) {
		this.adviceStatus = adviceStatus;
	}

	public Date getTimestamp() {
		return timestamp;
	}

	public void setTimestamp(Date timestamp) {
		this.timestamp = timestamp;
	}

	public Short getStatus() {
		return status;
	}

	public void setStatus(Short status) {
		this.status = status;
	}

	public List<ValidationErrorField> getErrors() {
		return errors;
	}

	public void setErrors(List<ValidationErrorField> errors) {
		this.errors = errors;
	}

	public Short getHttpCode() {
		return httpCode;
	}

	public void setHttpCode(Short httpCode) {
		this.httpCode = httpCode;
	}
}