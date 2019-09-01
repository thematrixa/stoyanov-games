package com.gorchovski.stoyanovgames.validator;

import org.springframework.stereotype.Component;
import org.springframework.validation.BeanPropertyBindingResult;
import org.springframework.validation.Errors;

import com.gorchovski.stoyanovgames.excetion.StoyanovGamesValidationException;
import com.gorchovski.stoyanovgames.model.User;
import com.gorchovski.stoyanovgames.model.Votes;

@Component
public class VotesValidator extends BasicValidator{
	
	private final Integer USERNAME_MIN_LENGHT = 0;
	private final Integer USERNAME_MAX_LENGHT = 0;
	private final char DELIMITER = '.';

	public VotesValidator() {

	}

	public void validateVotes(Object target) throws StoyanovGamesValidationException {
		Votes votes = (Votes) target;
		Errors errors = new BeanPropertyBindingResult(votes, "votes");
		if (!this.isProductIdValid(votes.getProductId())) {
			errors.rejectValue("", "votesProductId" + DELIMITER + votes.getId(),
					"ProductId е задължително.");
		}
		if (!this.isUsernameМINLengthValid(votes.getUser())) {
			errors.rejectValue("", "votesUsername" + DELIMITER + votes.getId(),
					"Дължината на потребителското име,трябва да е над " + USERNAME_MIN_LENGHT + " символа.");
		}
		if (!this.isUsernameMAXLengthValid(votes.getUser())) {
			errors.rejectValue("", "votesUsername" + DELIMITER + votes.getId(),
					"Дължината на потребителското име,трябва да е под " + USERNAME_MIN_LENGHT + " символа.");
		}
		String validationMsg = "votes exception";
		throwInvalidException(errors, validationMsg);
	}


	public Boolean isUsernameМINLengthValid(User name) {
		if (name != null && name.getUsername() != null && name.getUsername().length() > USERNAME_MIN_LENGHT) {
			return true;
		}
		return false;
	}
	public Boolean isUsernameMAXLengthValid(User name) {
		if (name != null && name.getUsername() != null && name.getUsername().length() < USERNAME_MAX_LENGHT) {
			return true;
		}
		return false;
	}
	public Boolean isProductIdValid(Integer productId) {
		if (productId != null) {
			return true;
		}
		return false;
	}
}
