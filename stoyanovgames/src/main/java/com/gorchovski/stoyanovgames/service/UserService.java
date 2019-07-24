package com.gorchovski.stoyanovgames.service;

import java.io.UnsupportedEncodingException;
import java.util.List;
import java.util.Random;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.scheduling.annotation.Async;
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
	@Autowired
	private EmailingService emailService;
	@Value("${server.port}")
	private String serverPort;
	@Value("${server.serverPath}")
	private String contextPath;
	
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

	public void forgottenPassword(String username) throws UnsupportedEncodingException {
		System.out.println(username);
		User user = this.userRepository.findByUsername(username);
		if (user.getIsEmailConfirmed()) {
			String link = this.generateRandomString();
			user.setResetLink(link);
			this.userRepository.save(user);
			this.emailService.sendSimpleMessage(user.getEmail(), "StoyanovGames Forgotten Password",
					"Hello, If this mail is sent to you by mistake.Please forgive us and ignore this email.Use to folowing link "
							+ contextPath+ serverPort +"/users/reset-password/"+link + "\n to get new email containing a temporary password");
		} else {// TODO finish the emailing service.
		}
	}
	public void resetPassword(String link) throws UnsupportedEncodingException {
		System.out.println(link);
		User user = this.userRepository.findByResetLink(link);
		if (user.getIsEmailConfirmed()) {
			String newPassword = this.generateRandomString();
			user.setResetLink("");
			user.setPassword(bCryptPasswordEncoder.encode(newPassword));
			this.userRepository.save(user);
			this.deleteResetLink(link);
			this.emailService.sendSimpleMessage(user.getEmail(), "StoyanovGames Reset Password",
					"Hello,\n If this mail is sent to you by mistake.Please forgive us and ignore this email.This is your new temporary password.\n" + newPassword + "\nIt will expire in 10 minutes.");
		} else {// TODO finish the emailing service.
		}
	}


	public String generateRandomString() {
		int leftLimit = 97; // letter 'a'
		int rightLimit = 122; // letter 'z'
		int targetStringLength = 20;
		Random random = new Random();
		StringBuilder buffer = new StringBuilder(targetStringLength);
		for (int i = 0; i < targetStringLength; i++) {
			int randomLimitedInt = leftLimit + (int) (random.nextFloat() * (rightLimit - leftLimit + 1));
			buffer.append((char) randomLimitedInt);
		}
		String generatedString = buffer.toString();
		return generatedString;
	};
	
	@Async
	public void deleteResetLink(String link) {
		try {
			Thread.sleep(40000);
		} catch (InterruptedException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		User user = this.userRepository.findByResetLink(link);
		user.setResetLink(null);
		this.userRepository.save(user);
	}

}
