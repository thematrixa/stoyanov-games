package com.gorchovski.stoyanovgames.validator;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import org.springframework.validation.BeanPropertyBindingResult;
import org.springframework.validation.Errors;

import com.gorchovski.stoyanovgames.excetion.StoyanovGamesValidationException;
import com.gorchovski.stoyanovgames.model.CartItem;
import com.gorchovski.stoyanovgames.model.Product;

@Component
public class CartItemValidator extends BasicValidator {
	private final Integer QUANTITY_MIN_VALUE = 0;
	private final char DELIMITER = '.';
	private final Logger logger = LoggerFactory.getLogger(AddressValidator.class);

	@Autowired
	private ProductValidator productValidator;

	public CartItemValidator() {

	}

	public void validateCartItem(Object target) throws StoyanovGamesValidationException {

		CartItem cartItem = (CartItem) target;
		Errors errors = new BeanPropertyBindingResult(cartItem, "cartItem");
		if (!this.isCartItemQuantityValid(cartItem.getQuantity())) {
			errors.rejectValue("", "cartItemQuantity" + DELIMITER + cartItem.getId(),
					"Quantity, трябва да е над " + QUANTITY_MIN_VALUE);
		}

		if (!this.isCartItemProductValid(cartItem.getProduct())) {
			errors.rejectValue("", "cartItemProduct" + DELIMITER + cartItem.getId(),
					"Продукта е невалиден ");
		}

		String validationMsg = "cartItem exception";
		throwInvalidException(errors, validationMsg);
	}

	public Boolean isCartItemQuantityValid(Integer quantity) {
		if (quantity > QUANTITY_MIN_VALUE) {
			return true;
		}
		return false;
	}

	public Boolean isCartItemProductValid(Product product) {
		try {
			this.productValidator.validateProduct(product);
		} catch (StoyanovGamesValidationException ex) {
			return false;
		}
		return true;
	}

}
