package com.gorchovski.stoyanovgames.validator;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Component;
import org.springframework.validation.BeanPropertyBindingResult;
import org.springframework.validation.Errors;

import com.gorchovski.stoyanovgames.excetion.StoyanovGamesValidationException;
import com.gorchovski.stoyanovgames.model.Order;
import com.gorchovski.stoyanovgames.model.OrdersEnum;

@SuppressWarnings("unused")
@Component
public class OrderValidator extends BasicValidator {
	private final Integer ORDER_NAME_MIN_LENGHT = 0;
	private final Integer ORDER_NAME_MAX_LENGHT = 50;
	private final Integer ORDER_ADDRESS_MIN_LENGHT = 0;
	private final Integer ORDER_ADDRESS_MAX_LENGHT = 50;
	private final Integer ORDER_PHONE_MIN_LENGHT = 0;
	private final Integer ORDER_PHONE_MAX_LENGHT = 10;
	private final char DELIMITER = '.';
	private final Logger logger = LoggerFactory.getLogger(AddressValidator.class);

	public OrderValidator() {

	}

	public void validateOrder(Object target) throws StoyanovGamesValidationException {
		Order order = (Order) target;
		Errors errors = new BeanPropertyBindingResult(order, "order");
		if (!this.isOrderNameMINLengthValid(order.getName())) {
			errors.rejectValue("", "orderName" + DELIMITER + order.getId(),
					"Дължината на име, трябва да е над " + ORDER_NAME_MIN_LENGHT + " символа.");
		}
		if (!this.isOrderNameMAXLenghtValid(order.getName())) {
			errors.rejectValue("", "orderName" + DELIMITER + order.getId(),
					"Дължината на име, трябва да е под " + ORDER_NAME_MAX_LENGHT + " символа.");
		}
		if (!this.isOrderAddressMINLengthValid(order.getAddress())) {
			errors.rejectValue("", "orderAddress" + DELIMITER + order.getId(),
					"Дължината на адрес, трябва да е над " + ORDER_ADDRESS_MIN_LENGHT + " символа.");
		}
		if (!this.isOrderAddressMAXLenghtValid(order.getAddress())) {
			errors.rejectValue("", "orderAddress" + DELIMITER + order.getId(),
					"Дължината на адрес, трябва да е под " + ORDER_ADDRESS_MAX_LENGHT + " символа.");
		}
		if (!this.isOrderPhoneMINLengthValid(order.getPhone())) {
			errors.rejectValue("", "orderPhone" + DELIMITER + order.getId(),
					"Дължината на телефон, трябва да е над " + ORDER_PHONE_MIN_LENGHT + " символа.");
		}
		if (!this.isOrderPhoneMAXLenghtValid(order.getPhone())) {
			errors.rejectValue("", "orderPhone" + DELIMITER + order.getId(),
					"Дължината на телефон,трябва да е под " + ORDER_PHONE_MAX_LENGHT + " символа.");
		}

		if (!this.isUserIdValid(order.getUserId())) {
			errors.rejectValue("", "orderUserId" + DELIMITER + order.getId(), "UserId e задължително");
		}

		if (!this.isTotalValid(order.getTotal())) {
			errors.rejectValue("", "orderUserId" + DELIMITER + order.getId(), "Total e задължително");
		}

		if (!this.isStatusValid(order.getStatus())) {
			errors.rejectValue("", "orderUserId" + DELIMITER + order.getId(), "Status e невалиден");
		}

		String validationMsg = "address name exception";
		throwInvalidException(errors, validationMsg);
	}

	public Boolean isOrderNameMAXLenghtValid(String name) {
		if (name.length() < ORDER_NAME_MAX_LENGHT) {
			return true;
		}
		return false;
	}

	public Boolean isOrderNameMINLengthValid(String name) {
		if (name.length() > ORDER_NAME_MIN_LENGHT) {
			return true;
		}
		return false;
	}

	public Boolean isOrderAddressMAXLenghtValid(String address) {
		if (address.length() < ORDER_ADDRESS_MAX_LENGHT) {
			return true;
		}
		return false;
	}

	public Boolean isOrderAddressMINLengthValid(String address) {
		if (address.length() > ORDER_ADDRESS_MIN_LENGHT) {
			return true;
		}
		return false;
	}

	public Boolean isOrderPhoneMAXLenghtValid(String phone) {
		if (phone.length() < ORDER_ADDRESS_MAX_LENGHT) {
			return true;
		}
		return false;
	}

	public Boolean isOrderPhoneMINLengthValid(String phone) {
		if (phone.length() > ORDER_ADDRESS_MIN_LENGHT) {
			return true;
		}
		return false;
	}

	public Boolean isUserIdValid(Integer userId) {
		if (userId != null) {
			return true;
		}
		return false;
	}
	public Boolean isTotalValid(Float total) {
		if (total != null) {
			return true;
		}
		return false;
		
	}
	@SuppressWarnings("unlikely-arg-type")
	public Boolean isStatusValid(OrdersEnum status) {
		if (status != null) {
			for (OrdersEnum temp : OrdersEnum.values()) {
		        if (temp.name().equals(status)) {
		            return true;
		        }
		    }
		}
		return false;
	}
}
