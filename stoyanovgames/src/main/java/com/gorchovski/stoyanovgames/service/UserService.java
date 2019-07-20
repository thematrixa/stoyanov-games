package com.gorchovski.stoyanovgames.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.gorchovski.stoyanovgames.model.User;
import com.gorchovski.stoyanovgames.repository.UserRepository;

@Transactional
@Service
public class UserService {

	// @Value(/*ANY NAME GOES HERE FROM APP PROPERTIES"${fb.keystore.etlog.name}"*/)
	// private String eTlogKeystoreName;
	@Autowired
	private UserRepository userRepository;
	@Autowired
	private BCryptPasswordEncoder bCryptPasswordEncoder;
	@Autowired
	private SecurityService securityService;

	public List<User> list() {
		return userRepository.findAll();
	}

	public void batchInsertUpdate(List<User> list) {
		this.userRepository.saveAll(list);
	}

	public void truncate() {
		this.userRepository.deleteAll();
	}

	public void save(User user) {
		String deCryptedPassword = user.getPassword();
		user.setPassword(bCryptPasswordEncoder.encode(user.getPassword()));
		this.userRepository.save(user);
		securityService.autoLogin(user.getUsername(), deCryptedPassword);

	}
	
	public void update(User user) {
		this.userRepository.save(user);
	}

	public User getUser(String username) {
		return this.userRepository.findByUsername(username);
	}

}
