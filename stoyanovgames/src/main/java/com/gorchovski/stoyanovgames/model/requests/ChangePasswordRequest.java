package com.gorchovski.stoyanovgames.model.requests;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.gorchovski.stoyanovgames.model.User;

public class ChangePasswordRequest {
	@JsonProperty("user")
	private User user;
	@JsonProperty("nPassword")
	private String nPassword;

	public User getUser() {
		return user;
	}

	public void setUser(User user) {
		this.user = user;
	}

	public String getnPassword() {
		return nPassword;
	}

	public void setnPassword(String nPassword) {
		this.nPassword = nPassword;
	}
}
