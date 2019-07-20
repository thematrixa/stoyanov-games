package com.gorchovski.stoyanovgames.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

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
	public ResponseEntity<?> registerUser(@RequestBody User user) {
		this.userService.save(user);
		return new ResponseEntity<>(HttpStatus.NO_CONTENT);
	}
	
	@RequestMapping(method = RequestMethod.POST, value = "/update", consumes = "application/json")
	public ResponseEntity<?> updateUser(@RequestBody User user) {
		this.userService.update(user);
		return new ResponseEntity<>(HttpStatus.NO_CONTENT);
	}

	@RequestMapping(produces = "application/json", method = RequestMethod.GET, value = "/login" )
	public StoyanovGamesResponse<?> loginUser(@RequestParam String username) {
		return new StoyanovGamesResponse<>(this.userService.getUser(username));
	}
}