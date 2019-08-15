package com.gorchovski.stoyanovgames.validator;

import org.springframework.stereotype.Component;
import org.springframework.validation.BeanPropertyBindingResult;
import org.springframework.validation.Errors;

import com.gorchovski.stoyanovgames.excetion.StoyanovGamesValidationException;
import com.gorchovski.stoyanovgames.model.Address;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

@Component
public class AddressValidator extends BasicValidator {

	private final Integer ADDRESS_NAME_MIN_LENGHT = 0;
	private final Integer ADDRESS_NAME_MAX_LENGHT = 50;
	private final char DELIMITER = '.';
	private final Logger logger = LoggerFactory.getLogger(AddressValidator.class);

	public AddressValidator() {

	}

	public void validateAddress(Object target) throws StoyanovGamesValidationException {
		Address address = (Address) target;
		Errors errors = new BeanPropertyBindingResult(address, "address");
		if (!this.isAddressNameMINLengthValid(address.getName())) {
			errors.rejectValue("", "addressName" + DELIMITER + address.getId(),
					"Дължината на адресът,трябва да е над " + ADDRESS_NAME_MIN_LENGHT);
		}
		if (!this.isAddressNameMAXLenghtValid(address.getName())) {
			errors.rejectValue("", "addressName" + DELIMITER + address.getId(),
					"Дължината на адресът,трябва да е над " + ADDRESS_NAME_MAX_LENGHT);
		}
		String validationMsg = "address name exception";
		throwInvalidException(errors, validationMsg);
	}


	public Boolean isAddressNameMAXLenghtValid(String name) {
		if (name.length() < ADDRESS_NAME_MAX_LENGHT) {
			return true;
		}
		return false;
	}
	public Boolean isAddressNameMINLengthValid(String name) {
		if (name.length() > ADDRESS_NAME_MIN_LENGHT) {
			return true;
		}
		return false;
	}
}
