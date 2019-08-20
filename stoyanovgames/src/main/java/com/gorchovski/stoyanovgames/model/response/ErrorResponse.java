package com.gorchovski.stoyanovgames.model.response;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import com.fasterxml.jackson.annotation.JsonFormat;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.gorchovski.stoyanovgames.excetion.StoyanovGamesValidationException;
import com.gorchovski.stoyanovgames.model.ValidationErrorField;
import com.gorchovski.stoyanovgames.model.enums.StatusEnum;

@JsonIgnoreProperties({ "httpCode" })
public class ErrorResponse{

	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;
	@JsonProperty("messageText")
	private String messageText;
	@JsonProperty("status")
	private StatusEnum status;
	@JsonFormat(shape = JsonFormat.Shape.STRING, pattern = "yyyy-MM-dd'T'HH:mm:ss")
	@JsonProperty("timestamp")
	private Date timestamp;	
	@JsonProperty("error")
	private static List<ValidationErrorField> error;
	@JsonProperty("httpCode")
	private Short httpCode;

	public static ErrorResponse buildFromStoyanovGamesValidationException(StoyanovGamesValidationException exception) {
		//Errors er = exception.getErrors();
		ErrorResponse response = new ErrorResponse();
		response.setError(exception.getErrors());
		response.setTimestamp(new Date(System.currentTimeMillis()));
		response.setStatus(StatusEnum.ERROR);
		response.setMessageText(exception.getMessage());
		return response;
	}

	public static ErrorResponse buildFromException(Exception exception) {
		ErrorResponse response = new ErrorResponse();
		response.setTimestamp(new Date(System.currentTimeMillis()));
		response.setError(new ArrayList<ValidationErrorField>());
		response.setStatus(StatusEnum.ERROR);
		response.setMessageText(exception.getMessage());
		return response;
	}

	public String getMessageText() {
		return messageText;
	}

	public void setMessageText(String messageText) {
		this.messageText = messageText;
	}

	public Date getTimestamp() {
		return timestamp;
	}

	public void setTimestamp(Date timestamp) {
		this.timestamp = timestamp;
	}

	public Short getHttpCode() {
		return httpCode;
	}

	public void setHttpCode(Short httpCode) {
		this.httpCode = httpCode;
	}

	public StatusEnum getStatus() {
		return status;
	}

	public void setStatus(StatusEnum status) {
		this.status = status;
	}

	public List<ValidationErrorField> getError() {
		return error;
	}

	public void setError(List<ValidationErrorField> error) {
		ErrorResponse.error = error;
	}

	public static long getSerialversionuid() {
		return serialVersionUID;
	}
}