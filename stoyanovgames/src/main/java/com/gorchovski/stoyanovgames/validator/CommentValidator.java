package com.gorchovski.stoyanovgames.validator;

import org.springframework.stereotype.Component;
import org.springframework.validation.BeanPropertyBindingResult;
import org.springframework.validation.Errors;

import com.gorchovski.stoyanovgames.excetion.StoyanovGamesValidationException;
import com.gorchovski.stoyanovgames.model.Comment;
import com.gorchovski.stoyanovgames.model.User;

@Component
public class CommentValidator extends BasicValidator {
	private final Integer CONTENT_MIN_LENGHT = 0;
	private final Integer CONTENT_MAX_LENGHT = 255;
	private final char DELIMITER = '.';

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
		if (!this.isUserValid(comment.getUseer())) {
			errors.rejectValue("", "commentUser" + DELIMITER + comment.getId(),
					"Невалиден потребител.");
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

	public Boolean isUserValid(User user) {
		if (user != null) {
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
