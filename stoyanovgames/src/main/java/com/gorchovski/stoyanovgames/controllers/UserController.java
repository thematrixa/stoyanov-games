package com.gorchovski.stoyanovgames.controllers;

import java.io.UnsupportedEncodingException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.gorchovski.stoyanovgames.model.ChangePasswordRequest;
import com.gorchovski.stoyanovgames.model.StoyanovGamesResponse;
import com.gorchovski.stoyanovgames.model.User;
import com.gorchovski.stoyanovgames.service.UserService;

@CrossOrigin(origins = "http://localhost:4200", allowedHeaders = "*")
@RestController
@RequestMapping("/users")
public class UserController {
	private final UserService userService;

	@Autowired
	public UserController(UserService userService) {
		this.userService = userService;
	}

	@RequestMapping(produces = "application/json", method = RequestMethod.GET, value = "/get")
	public StoyanovGamesResponse<?> getUsers() {
		return new StoyanovGamesResponse<>(this.userService.list());
	}

	@RequestMapping(method = RequestMethod.POST, value = "/register", consumes = "application/json")
	public ResponseEntity<?> registerUser(@RequestBody User user) throws UnsupportedEncodingException {
		this.userService.register(user);
		return new ResponseEntity<>(HttpStatus.NO_CONTENT);
	}

	@RequestMapping(method = RequestMethod.POST, value = "/update", consumes = "application/json")
	public ResponseEntity<?> updateUser(@RequestBody User user) {
		this.userService.update(user);
		return new ResponseEntity<>(HttpStatus.NO_CONTENT);
	}

	@RequestMapping(produces = "application/json", method = RequestMethod.GET, value = "/login")
	public StoyanovGamesResponse<?> loginUser(@RequestParam String username) {
		return new StoyanovGamesResponse<>(this.userService.getUser(username));
	}

	@RequestMapping(produces = "application/json", method = RequestMethod.GET, value = "/forgot-password")
	public ResponseEntity<?> forgottenPasswrd(@RequestParam String username) throws UnsupportedEncodingException {
		this.userService.forgottenPassword(username);// );
		return new ResponseEntity<>(HttpStatus.NO_CONTENT);
	}

	@CrossOrigin(origins = "*", allowedHeaders = "*")
	@RequestMapping(produces = "application/json", method = RequestMethod.GET, value = "/reset-password/{link}")
	public ResponseEntity<?> resetPasswrd(@PathVariable(value = "link") String link) throws UnsupportedEncodingException {
		this.userService.resetPassword(link);
		return new ResponseEntity<>(HttpStatus.NO_CONTENT);
	}

	@CrossOrigin(origins = "*", allowedHeaders = "*")
	@RequestMapping(produces = "application/json", method = RequestMethod.GET, value = "/confirm/{username}")
	public ResponseEntity<?> confirmEmail(@PathVariable(value = "username") String username) throws UnsupportedEncodingException {
		this.userService.confirmUserMail(username);
		return new ResponseEntity<>(HttpStatus.NO_CONTENT);
	}

	@RequestMapping(method = RequestMethod.POST, value = "/change-password", consumes = "application/json")
	public ResponseEntity<?> changePassword(@RequestBody ChangePasswordRequest data)
			throws UnsupportedEncodingException {

		this.userService.changePassword(data.getUser(), data.getnPassword());
		return new ResponseEntity<>(HttpStatus.NO_CONTENT);
	}

	@RequestMapping(method = RequestMethod.POST, value = "/user-settings/save", consumes = "application/json")
	public ResponseEntity<?> userSettingsSave(@RequestBody User user) throws UnsupportedEncodingException {
		this.userService.saveUserSettings(user);
		return new ResponseEntity<>(HttpStatus.NO_CONTENT);
	}
}