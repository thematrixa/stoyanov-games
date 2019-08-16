package com.gorchovski.stoyanovgames.validator;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Component;
import org.springframework.validation.BeanPropertyBindingResult;
import org.springframework.validation.Errors;

import com.gorchovski.stoyanovgames.excetion.StoyanovGamesValidationException;
import com.gorchovski.stoyanovgames.model.News;

@Component
public class NewsValidator extends BasicValidator {
	private final Integer TITLE_MIN_LENGHT = 0;
	private final Integer CONTENT_MIN_LENGHT = 5;
	private final Integer TITLE_MAX_LENGHT = 25;
	private final Integer CONTENT_MAX_LENGHT = 255;
	private final char DELIMITER = '.';
	private final Logger logger = LoggerFactory.getLogger(AddressValidator.class);

	public NewsValidator() {

	}

	public void validateNews(Object target) throws StoyanovGamesValidationException {
		News news = (News) target;
		Errors errors = new BeanPropertyBindingResult(news, "news");
		if (!this.isTitleMINLengthValid(news.getTitle())) {
			errors.rejectValue("", "newsTitle" + DELIMITER + news.getId(),
					"Дължината на заглавието,трябва да е над " + TITLE_MIN_LENGHT + " символа.");
		}
		if (!this.isContentMINLenghtValid(news.getContent())) {
			errors.rejectValue("", "newsContent" + DELIMITER + news.getId(),
					"Дължината на съдържанието,трябва да е над " + CONTENT_MIN_LENGHT + " символа.");
		}
		if (!this.isTitleMAXLengthValid(news.getTitle())) {
			errors.rejectValue("", "newsTitle" + DELIMITER + news.getId(),
					"Дължината на заглавието, трябва да е под " + TITLE_MAX_LENGHT + " символа.");
		}
		if (!this.isContentMAXLengthValid(news.getContent())) {
			errors.rejectValue("", "newsContent" + DELIMITER + news.getId(),
					"Дължината на съдържанието, трябва да е под " + CONTENT_MAX_LENGHT + " символа.");
		}
		String validationMsg = "user exception";
		throwInvalidException(errors, validationMsg);
	}

	public Boolean isTitleMINLengthValid(String title) {
		if (title != null && title.length() > TITLE_MIN_LENGHT) {
			return true;
		}
		return false;
	}

	public Boolean isContentMINLenghtValid(String content) {
		if (content != null && content.length() > CONTENT_MIN_LENGHT) {
			return true;
		}
		return false;
	}

	public Boolean isTitleMAXLengthValid(String title) {
		if (title != null && title.length() < TITLE_MAX_LENGHT) {
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

}