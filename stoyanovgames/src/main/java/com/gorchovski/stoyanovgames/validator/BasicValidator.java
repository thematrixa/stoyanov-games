package com.gorchovski.stoyanovgames.validator;

import org.springframework.validation.Errors;

import com.gorchovski.stoyanovgames.excetion.StoyanovGamesValidationException;

public class BasicValidator {
		
	public void throwInvalidException(Errors errors, String validationMsg) throws StoyanovGamesValidationException {
		if (errors.hasErrors()) {
			throw new StoyanovGamesValidationException(validationMsg, errors);
		}
	}
	
}
