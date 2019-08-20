package com.gorchovski.stoyanovgames.validator;

import java.util.regex.Matcher;
import java.util.regex.Pattern;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import org.springframework.validation.BeanPropertyBindingResult;
import org.springframework.validation.Errors;

import com.gorchovski.stoyanovgames.excetion.StoyanovGamesValidationException;
import com.gorchovski.stoyanovgames.model.User;
import com.gorchovski.stoyanovgames.repository.UserRepository;
@Component
public class UserSettingsValidator extends BasicValidator {
	@Autowired
	private UserRepository userRepository;
	private final Integer NAME_MIN_LENGHT = 5;
	private final Integer NAME_MAX_LENGHT = 50;
	private final String EMAIL_REGEX = "^[A-Z0-9._%+-]+@[A-Z0-9.-]+\\\\.[A-Z]{2,6}$";
	private final char DELIMITER = '.';
	private final Logger logger = LoggerFactory.getLogger(AddressValidator.class);

	public UserSettingsValidator() {

	}

	public void validateUserSettings(Object target) throws StoyanovGamesValidationException {
		User user = (User) target;
		Errors errors = new BeanPropertyBindingResult(user, "user");
		if (!this.isUserNameMINLengthValid(user.getName())) {
			errors.rejectValue("", "userName" + DELIMITER + user.getId(),
					"Дължината на името, трябва да е над " + NAME_MIN_LENGHT + " символа.");
		}
		if (!this.isUserNameMAXLengthValid(user.getName())) {
			errors.rejectValue("", "userName" + DELIMITER + user.getId(),
					"Дължината на името, трябва да е под " + NAME_MAX_LENGHT + " символа.");
		}
		if (!this.isPhoneValid(user.getPhone())) {
			errors.rejectValue("", "userPhone" + DELIMITER + user.getId(),
					"Телефонът е невалиден.");
		}
		String validationMsg = "user exception";
		throwInvalidException(errors, validationMsg);
	}
	
	public void isUserRegistered(Object target) throws StoyanovGamesValidationException {
		User user = (User) target;
		Errors errors = new BeanPropertyBindingResult(user, "user");
		if (this.isUsernameInDatabase(user.getUsername())) {
			errors.rejectValue("", "userUsername" + DELIMITER + user.getId(),
					"Потребителят съществува.");
		}
		String validationMsg = "user exception";
		throwInvalidException(errors, validationMsg);
	}
	public Boolean isUserNameMINLengthValid(String username) {
		if (username != null && username.length() > NAME_MIN_LENGHT) {
			return true;
		}
		return false;
	}

	public Boolean isUserNameMAXLengthValid(String username) {
		if (username != null && username.length() < NAME_MAX_LENGHT) {
			return true;
		}
		return false;
	}

	public Boolean isEmailValid(String email) {
		if (email != null && email.length() > 0) {
			Matcher matcher = Pattern.compile(EMAIL_REGEX, Pattern.CASE_INSENSITIVE).matcher(email.toUpperCase());
	        return matcher.find();
		}
		return false;
	}
	

	public Boolean isPhoneValid(String phone) {
		if (phone != null && phone.length() > 0) {
			return true;
		}
		return false;
	}
	
	public Boolean isUsernameInDatabase(String username) {
		if(this.userRepository.findByUsername(username) != null) {
			return true;
		}
		return false;
	}

}
