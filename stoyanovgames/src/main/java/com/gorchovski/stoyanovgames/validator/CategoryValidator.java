package com.gorchovski.stoyanovgames.validator;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.validation.Errors;

import com.gorchovski.stoyanovgames.excetion.StoyanovGamesValidationException;
import com.gorchovski.stoyanovgames.model.Category;

public class CategoryValidator extends BasicValidator{
	private final Integer CATEGORY_NAME_LENGHT = 0;
	private final char DELIMITER = '.';
	private final Logger logger = LoggerFactory.getLogger(CategoryValidator.class);

	public CategoryValidator() {

	}

	public void validateAddress(Object target, Errors errors) throws StoyanovGamesValidationException {
		Category category = (Category) target;
		if (!this.isCategoryNameValid(category.getName())) {
			errors.rejectValue("", "categoryName" + DELIMITER + category.getId(),
					"Името,трябва да е над " + CATEGORY_NAME_LENGHT);
		}
		String validationMsg = "address name exception";
		throwInvalidException(errors, validationMsg);
	}


	public Boolean isCategoryNameValid(String name) {
		if (name.length() > CATEGORY_NAME_LENGHT) {
			return true;
		}
		return false;
	}

}
