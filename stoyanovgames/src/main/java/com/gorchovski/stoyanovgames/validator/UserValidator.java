package com.gorchovski.stoyanovgames.validator;

import java.util.regex.Matcher;
import java.util.regex.Pattern;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import org.springframework.validation.BeanPropertyBindingResult;
import org.springframework.validation.Errors;

import com.gorchovski.stoyanovgames.excetion.StoyanovGamesValidationException;
import com.gorchovski.stoyanovgames.model.User;
import com.gorchovski.stoyanovgames.repository.UserRepository;

@Component
public class UserValidator extends BasicValidator {
	@Autowired
	private UserRepository userRepository;
	private final Integer USERNAME_MIN_LENGHT = 5;
	private final Integer PASSWORD_MIN_LENGHT = 5;
	private final Integer USERNAME_MAX_LENGHT = 25;
	private final Integer PASSWORD_MAX_LENGHT = 255;
	private final String EMAIL_REGEX = "^[A-Z0-9._%+-]+";
	private final char DELIMITER = '.';

	public UserValidator() {

	}

	public void validateUser(Object target) throws StoyanovGamesValidationException {
		User user = (User) target;
		Errors errors = new BeanPropertyBindingResult(user, "user");
		if (!this.isUsernameMINLengthValid(user.getUsername())) {
			errors.rejectValue("", "userUsername" + DELIMITER + user.getId(),
					"Дължината на потребителското име,трябва да е над " + USERNAME_MIN_LENGHT + " символа.");
		}
		if (!this.isPasswordMINLenghtValid(user.getPassword())) {
			errors.rejectValue("", "userPassword" + DELIMITER + user.getId(),
					"Дължината на паролата,трябва да е над " + PASSWORD_MIN_LENGHT + " символа.");
		}
		if (!this.isUsernameMAXLengthValid(user.getUsername())) {
			errors.rejectValue("", "userUsername" + DELIMITER + user.getId(),
					"Дължината на потребителското име,трябва да е под " + USERNAME_MAX_LENGHT + " символа.");
		}
		if (!this.isPasswordMAXLengthValid(user.getPassword())) {
			errors.rejectValue("", "userPassword" + DELIMITER + user.getId(),
					"Дължината на паролата,трябва да е под " + PASSWORD_MAX_LENGHT + " символа.");
		}
		if (!this.isEmailValid(user.getEmail())) {
			errors.rejectValue("", "userEmail" + DELIMITER + user.getId(), "Въведете валиден email адрес");
		}
		if (!this.isUserMailConfirmed(user)) {
			errors.rejectValue("", "userEmail" + DELIMITER + user.getId(), "Непотвърден E-mail");
		}
		String validationMsg = "user exception";
		throwInvalidException(errors, validationMsg);
	}

	public void isUserRegistered(Object target) throws StoyanovGamesValidationException {
		User user = (User) target;
		Errors errors = new BeanPropertyBindingResult(user, "user");
		if (this.isUsernameInDatabase(user.getUsername())) {
			errors.rejectValue("", "userUsername" + DELIMITER + user.getId(), "Потребителят съществува.");
		}
		String validationMsg = "user exception";
		throwInvalidException(errors, validationMsg);
	}

	public Boolean isUsernameMINLengthValid(String username) {
		if (username != null && username.length() > USERNAME_MIN_LENGHT) {
			return true;
		}
		return false;
	}

	public Boolean isPasswordMINLenghtValid(String password) {
		if (password != null && password.length() > PASSWORD_MIN_LENGHT) {
			return true;
		}
		return false;
	}

	public Boolean isUsernameMAXLengthValid(String username) {
		if (username != null && username.length() < USERNAME_MAX_LENGHT) {
			return true;
		}
		return false;
	}

	public Boolean isPasswordMAXLengthValid(String password) {
		if (password != null && password.length() < PASSWORD_MAX_LENGHT) {
			return true;
		}
		return false;
	}

	public Boolean isEmailValid(String email) {
		if (email != null && email.length() > 0) {
			Matcher matcher = Pattern.compile(EMAIL_REGEX, Pattern.CASE_INSENSITIVE).matcher(email);
			return matcher.find();
		}
		return false;
	}

	public Boolean isUsernameInDatabase(String username) {
		if (this.userRepository.findByUsername(username) != null) {
			return true;
		}
		return false;
	}

	public Boolean isUserMailConfirmed(User user) {
		User userDb = this.userRepository.findByUsername(user.getUsername());
		if (userDb != null) {
			if (userDb.getIsEmailConfirmed()) {
				return true;
			}
			return false;
		}
		return true;
	}
}
