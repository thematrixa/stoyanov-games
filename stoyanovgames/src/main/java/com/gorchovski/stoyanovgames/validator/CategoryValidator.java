package com.gorchovski.stoyanovgames.validator;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Component;
import org.springframework.validation.BeanPropertyBindingResult;
import org.springframework.validation.Errors;

import com.gorchovski.stoyanovgames.excetion.StoyanovGamesValidationException;
import com.gorchovski.stoyanovgames.model.Category;

@Component
public class CategoryValidator extends BasicValidator{
	private final Integer CATEGORY_NAME_MIN_LENGHT = 0;
	private final Integer CATEGORY_NAME_MAX_LENGHT = 20;
	private final char DELIMITER = '.';
	private final Logger logger = LoggerFactory.getLogger(CategoryValidator.class);

	public CategoryValidator() {

	}

	public void validateCategory(Object target) throws StoyanovGamesValidationException {
		Category category = (Category) target;
		Errors errors = new BeanPropertyBindingResult(category, "category");
		if (!this.isCategoryNameMINLenghtValid(category.getName())) {
			errors.rejectValue("", "name" + DELIMITER + category.getId(),
					"Името,трябва да е над " + CATEGORY_NAME_MIN_LENGHT + " символа.");
		}
		if (!this.isCategoryNameMAXLenghtValid(category.getName())) {
			errors.rejectValue("", "name" + DELIMITER + category.getId(),
					"Името,трябва да е под " + CATEGORY_NAME_MAX_LENGHT + " символа.");
		}
		String validationMsg = "category name exception";
		throwInvalidException(errors, validationMsg);
	}


	public Boolean isCategoryNameMINLenghtValid(String name) {
		if (name.length() > CATEGORY_NAME_MIN_LENGHT) {
			return true;
		}
		return false;
	}

	public Boolean isCategoryNameMAXLenghtValid(String name) {
		if (name.length() < CATEGORY_NAME_MAX_LENGHT) {
			return true;
		}
		return false;
	}
}
