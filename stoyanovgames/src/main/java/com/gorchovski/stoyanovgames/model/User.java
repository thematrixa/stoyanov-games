package com.gorchovski.stoyanovgames.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

@Entity
public class User {

    @Id
    @GeneratedValue
	private Integer Id;
	private String Username;
	private String Password;
	private String Email;
	private String Address;
	private String Phone;
	private Integer isEmailConfirmed;
	private String Name;
	private Integer IsAdmin;
	private Integer RoleId;

	public Integer getId() {
		return Id;
	}

	public void setId(Integer id) {
		Id = id;
	}

	public String getUsername() {
		return Username;
	}

	public void setUsername(String username) {
		Username = username;
	}

	public String getPassword() {
		return Password;
	}

	public void setPassword(String password) {
		Password = password;
	}

	public String getEmail() {
		return Email;
	}

	public void setEmail(String email) {
		Email = email;
	}

	public String getAddress() {
		return Address;
	}

	public void setAddress(String address) {
		Address = address;
	}

	public String getPhone() {
		return Phone;
	}

	public void setPhone(String phone) {
		Phone = phone;
	}

	public Integer getIsEmailConfirmed() {
		return isEmailConfirmed;
	}

	public void setIsEmailConfirmed(Integer isEmailConfirmed) {
		this.isEmailConfirmed = isEmailConfirmed;
	}

	public String getName() {
		return Name;
	}

	public void setName(String name) {
		Name = name;
	}

	public Integer getIsAdmin() {
		return IsAdmin;
	}

	public void setIsAdmin(Integer isAdmin) {
		IsAdmin = isAdmin;
	}

	public Integer getRoleId() {
		return RoleId;
	}

	public void setRoleId(Integer roleId) {
		RoleId = roleId;
	}
}
