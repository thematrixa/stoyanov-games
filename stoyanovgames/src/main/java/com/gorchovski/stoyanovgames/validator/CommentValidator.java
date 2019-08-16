package com.gorchovski.stoyanovgames.validator;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Component;
import org.springframework.validation.BeanPropertyBindingResult;
import org.springframework.validation.Errors;

import com.gorchovski.stoyanovgames.excetion.StoyanovGamesValidationException;
import com.gorchovski.stoyanovgames.model.Comment;

@Component
public class CommentValidator extends BasicValidator {
	private final Integer CONTENT_MIN_LENGHT = 0;
	private final Integer CONTENT_MAX_LENGHT = 255;
	private final Integer USERNAME_MIN_LENGHT = 0;
	private final Integer USERNAME_MAX_LENGHT = 25;
	private final char DELIMITER = '.';
	private final Logger logger = LoggerFactory.getLogger(AddressValidator.class);

	public CommentValidator() {

	}

	public void validateComment(Object target) throws StoyanovGamesValidationException {
		Comment comment = (Comment) target;
		Errors errors = new BeanPropertyBindingResult(comment, "comment");
		if (!this.isContentMINLenghtValid(comment.getContent())) {
			errors.rejectValue("", "commentContent" + DELIMITER + comment.getId(),
					"Дължината на съдържанието, трябва да е над " + CONTENT_MIN_LENGHT + " символа.");
		}
		if (!this.isContentMAXLengthValid(comment.getContent())) {
			errors.rejectValue("", "commentContent" + DELIMITER + comment.getId(),
					"Дължината на съдържанието, трябва да е под " + CONTENT_MAX_LENGHT + " символа.");
		}
		if (!this.isContentMINLenghtValid(comment.getUsername())) {
			errors.rejectValue("", "commentUsername" + DELIMITER + comment.getId(),
					"Дължината на потребителското име, трябва да е над " + USERNAME_MIN_LENGHT + " символа.");
		}
		if (!this.isContentMAXLengthValid(comment.getUsername())) {
			errors.rejectValue("", "commentUsername" + DELIMITER + comment.getId(),
					"Дължината на потребителското име, трябва да е под " + USERNAME_MAX_LENGHT + " символа.");
		}
		if (!this.isProductIdValid(comment.getProductId())) {
			errors.rejectValue("", "commentProductId" + DELIMITER + comment.getId(), "ProductId е задължително.");
		}
		if (!this.isRatingValid(comment.getRating())) {
			errors.rejectValue("", "commentRating" + DELIMITER + comment.getId(), "Rating е задължително.");
		}
		String validationMsg = "user exception";
		throwInvalidException(errors, validationMsg);
	}

	public Boolean isContentMINLenghtValid(String content) {
		if (content != null && content.length() > CONTENT_MIN_LENGHT) {
			return true;
		}
		return false;
	}

	public Boolean isContentMAXLengthValid(String content) {
		if (content != null && content.length() < CONTENT_MAX_LENGHT) {
			return true;
		}
		return false;
	}

	public Boolean isUsernameMINLenghtValid(String username) {
		if (username != null && username.length() > USERNAME_MIN_LENGHT) {
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

	public Boolean isProductIdValid(Integer productId) {
		if (productId != null) {
			return true;
		}
		return false;
	}

	public Boolean isRatingValid(Integer rating) {
		if (rating != null) {
			return true;
		}
		return false;
	}
}
