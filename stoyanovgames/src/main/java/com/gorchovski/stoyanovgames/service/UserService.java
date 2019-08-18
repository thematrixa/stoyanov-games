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

import com.gorchovski.stoyanovgames.excetion.StoyanovGamesValidationException;
import com.gorchovski.stoyanovgames.model.Address;
import com.gorchovski.stoyanovgames.model.User;
import com.gorchovski.stoyanovgames.repository.AddressRepository;
import com.gorchovski.stoyanovgames.repository.UserRepository;
import com.gorchovski.stoyanovgames.validator.AddressValidator;
import com.gorchovski.stoyanovgames.validator.UserValidator;

@Transactional
@Service
public class UserService {

	// @Value(/*ANY NAME GOES HERE FROM APP PROPERTIES"${fb.keystore.etlog.name}"*/)
	// private String eTlogKeystoreName;
	@Autowired
	private UserRepository userRepository;
	@Autowired
	private AddressRepository addressRepository;
	@Autowired
	private BCryptPasswordEncoder bCryptPasswordEncoder;
	@Autowired
	private SecurityService securityService;
	@Autowired
	private EmailingService emailService;
	@Autowired
	private UserValidator userValidator;
	@Autowired
	private AddressValidator addressValidator;
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

	public void register(User user) throws UnsupportedEncodingException, StoyanovGamesValidationException {
		this.userValidator.validateUser(user);
		this.userValidator.isUserRegistered(user);
		String deCryptedPassword = user.getPassword();
		user.setPassword(bCryptPasswordEncoder.encode(user.getPassword()));
		this.userRepository.save(user);
		this.emailService.sendConfirmationEmail(user);
		securityService.autoLogin(user.getUsername(), deCryptedPassword);

	}

	public void update(User user) throws StoyanovGamesValidationException {
		this.userValidator.validateUser(user);
		this.userRepository.save(user);
	}

	public void updateUserAddress(User feUser) throws StoyanovGamesValidationException {
		// this.userValidator.validateUser(feUser);
		for (Address address : feUser.getAddresses()) {
			this.addressValidator.validateAddress(address);
		}
		User loggedUser = this.securityService.findLoggedInUser();
		User dbUser = this.userRepository.findByUsername(loggedUser.getUsername());
		dbUser.setAddresses(feUser.getAddresses());
		this.userRepository.save(dbUser);
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
			this.emailService.sendResetPasswordEmail(user, link);
		} else {// TODO finish the emailing service.
		}
	}

	public void resetPassword(String link) throws UnsupportedEncodingException {
		User user = this.userRepository.findByResetLink(link);
		if (user.getIsEmailConfirmed()) {
			String newPassword = this.generateRandomString();
			user.setPassword(bCryptPasswordEncoder.encode(newPassword));
			this.userRepository.save(user);
			this.deleteResetLink(link);
		} else {// TODO finish the emailing service.
		}
	}

	public void changePassword(User feUser, String newPassword)
			throws UnsupportedEncodingException, StoyanovGamesValidationException {
		this.userValidator.validateUser(feUser);
		User dbUser = this.userRepository.findByUsername(feUser.getUsername());
		if (bCryptPasswordEncoder.matches(feUser.getPassword(), dbUser.getPassword())) {
			newPassword = bCryptPasswordEncoder.encode(newPassword);
			dbUser.setPassword(newPassword);
			this.userRepository.save(dbUser);
		} else {// TODO finish the change password
		}
	}

	public void saveUserSettings(User feUser) throws UnsupportedEncodingException, StoyanovGamesValidationException {
		this.userValidator.validateUser(feUser);
		User dbUser = this.userRepository.findByUsername(feUser.getUsername());
		dbUser.setName(feUser.getName());
		dbUser.setPhone(feUser.getPhone());
		this.userRepository.save(dbUser);
	}

	public void confirmUserMail(String username) throws UnsupportedEncodingException {
		User user = this.userRepository.findByUsername(username);
		user.setIsEmailConfirmed(true);
		this.userRepository.save(user);
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
			Thread.sleep(20000);
		} catch (InterruptedException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		User user = this.userRepository.findByResetLink(link);
		user.setResetLink(null);
		this.userRepository.save(user);
	}

}
