package com.gorchovski.stoyanovgames.validator;

import java.util.Date;

import javax.persistence.Column;
import javax.persistence.Lob;
import javax.persistence.ManyToOne;
import javax.validation.constraints.NotNull;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Component;
import org.springframework.validation.Errors;

import com.fasterxml.jackson.annotation.JsonFormat;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.gorchovski.stoyanovgames.excetion.StoyanovGamesValidationException;
import com.gorchovski.stoyanovgames.model.Category;
import com.gorchovski.stoyanovgames.model.Product;

@Component
public class ProductValidator extends BasicValidator {

	private final Integer PRODUCT_NAME_MIN_LENGHT = 0;
	private final Integer PRODUCT_DESC_MIN_LENGHT = 0;
	private final char DELIMITER = '.';
	private final Logger logger = LoggerFactory.getLogger(ProductValidator.class);

	public ProductValidator() {

	}

	public void validateProduct(Object target, Errors errors) throws StoyanovGamesValidationException {

		Product product = (Product) target;
		if (!this.isProductNameValid(product.getName())) {
			errors.rejectValue("", "productName" + DELIMITER + product.getId(),
					"Дължината на името,трябва да е над " + PRODUCT_NAME_MIN_LENGHT);
		}
		
		if (!this.isProductDescValid(product.getDescription())) {
			errors.rejectValue("", "productDesc" + DELIMITER + product.getId(),
					"Дължината на описанието,трябва да е над " + PRODUCT_NAME_MIN_LENGHT);
		}

		
		if (!this.isProductInStockValid(product.getInStock())) {
			errors.rejectValue("", "productInStock" + DELIMITER + product.getId(),
					"InStock e задължително");
		}

		if (!this.isProductQuantityValid(product.getQuantity())) {
			errors.rejectValue("", "productQuantity" + DELIMITER + product.getId(),
					"Quantity трябва да е по - голямо от 0");
		}
		
		String validationMsg = "product exception";
		throwInvalidException(errors, validationMsg);

	}

	public Boolean isProductNameValid(String name) {
		if (name.length() > PRODUCT_NAME_MIN_LENGHT) {
			return true;
		}
		return false;
	}

	public Boolean isProductDescValid(String desc) {
		if (desc.length() > PRODUCT_DESC_MIN_LENGHT) {
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
	
	public Boolean isProductQuantityValid(Integer quantity) {
		if (quantity > 0) {
			return true;
		}
		return false;
	}
}
