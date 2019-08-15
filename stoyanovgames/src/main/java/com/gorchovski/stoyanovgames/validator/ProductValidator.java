package com.gorchovski.stoyanovgames.validator;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import org.springframework.validation.BeanPropertyBindingResult;
import org.springframework.validation.Errors;

import com.gorchovski.stoyanovgames.excetion.StoyanovGamesValidationException;
import com.gorchovski.stoyanovgames.model.Category;
import com.gorchovski.stoyanovgames.model.Product;

@Component
public class ProductValidator extends BasicValidator {

	private final Integer PRODUCT_NAME_MIN_LENGHT = 0;
	private final Integer PRODUCT_DESC_MIN_LENGHT = 0;
	private final Integer PRODUCT_NAME_MAX_LENGHT = 50;
	private final Integer PRODUCT_DESC_MAX_LENGHT = 250;
	private final char DELIMITER = '.';
	private final Logger logger = LoggerFactory.getLogger(ProductValidator.class);

	@Autowired
	CategoryValidator categoryValidator;

	public ProductValidator() {

	}

	public void validateProduct(Object target) throws StoyanovGamesValidationException {

		Product product = (Product) target;
		Errors errors = new BeanPropertyBindingResult(product, "product");
		if (!this.isProductNameMINLenghtValid(product.getName())) {
			errors.rejectValue("", "productName" + DELIMITER + product.getId(),
					"Дължината на името,трябва да е над " + PRODUCT_NAME_MIN_LENGHT + " символа.");
		}

		if (!this.isProductDescMINLenghtValid(product.getDescription())) {
			errors.rejectValue("", "productDesc" + DELIMITER + product.getId(),
					"Дължината на описанието,трябва да е над " + PRODUCT_NAME_MIN_LENGHT + " символа.");
		}
		if (!this.isProductNameMAXLengthValid(product.getName())) {
			errors.rejectValue("", "productName" + DELIMITER + product.getId(),
					"Дължината на името,трябва да е под " + PRODUCT_NAME_MIN_LENGHT + " символа.");
		}

		if (!this.isProductDescMAXLengthValid(product.getDescription())) {
			errors.rejectValue("", "productDesc" + DELIMITER + product.getId(),
					"Дължината на описанието,трябва да е под " + PRODUCT_NAME_MIN_LENGHT + " символа.");
		}

		if (!this.isProductInStockValid(product.getInStock())) {
			errors.rejectValue("", "productInStock" + DELIMITER + product.getId(), "InStock e задължително");
		}

		if (!this.isProductQuantityValid(product.getQuantity())) {
			errors.rejectValue("", "productQuantity" + DELIMITER + product.getId(),
					"Quantity трябва да е по - голямо от 0");
		}

		this.categoryValidator.validateCategory(product.getCategory());

		String validationMsg = "product exception";
		throwInvalidException(errors, validationMsg);

	}

	public Boolean isProductNameMINLenghtValid(String name) {
		if (name.length() > PRODUCT_NAME_MIN_LENGHT) {
			return true;
		}
		return false;
	}

	public Boolean isProductDescMINLenghtValid(String desc) {
		if (desc.length() > PRODUCT_DESC_MIN_LENGHT) {
			return true;
		}
		return false;
	}

	public Boolean isProductNameMAXLengthValid(String name) {
		if (name.length() < PRODUCT_NAME_MAX_LENGHT) {
			return true;
		}
		return false;
	}

	public Boolean isProductDescMAXLengthValid(String desc) {
		if (desc.length() < PRODUCT_DESC_MAX_LENGHT) {
			return true;
		}
		return false;
	}

	public Boolean isProductInStockValid(Boolean inStock) {
		if (inStock != null) {
			return true;
		}
		return false;
	}

	public Boolean isProductCategoryValid(Category category) {
		if (category != null) {
			return true;
		}
		return false;
	}

	public Boolean isProductQuantityValid(Integer quantity) {
		if (quantity > 0) {
			return true;
		}
		return false;
	}
}
