package com.gorchovski.stoyanovgames.validator;

import java.util.Calendar;
import java.util.Date;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import org.springframework.validation.BeanPropertyBindingResult;
import org.springframework.validation.Errors;

import com.gorchovski.stoyanovgames.excetion.StoyanovGamesValidationException;
import com.gorchovski.stoyanovgames.model.Category;
import com.gorchovski.stoyanovgames.model.Product;

@Component
public class ProductValidator extends BasicValidator {

	private final Integer PRODUCT_NAME_MIN_LENGHT = 5;
	private final Integer PRODUCT_DESC_MIN_LENGHT = 5;
	private final Integer PRODUCT_NAME_MAX_LENGHT = 50;
	private final Integer PRODUCT_DESC_MAX_LENGHT = 250;
	private final char DELIMITER = '.';

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
					"Дължината на името,трябва да е под " + PRODUCT_NAME_MAX_LENGHT + " символа.");
		}

		if (!this.isProductDescMAXLengthValid(product.getDescription())) {
			errors.rejectValue("", "productDesc" + DELIMITER + product.getId(),
					"Дължината на описанието,трябва да е под " + PRODUCT_NAME_MAX_LENGHT + " символа.");
		}

		if (!this.isProductInStockValid(product.getInStock())) {
			errors.rejectValue("", "productInStock" + DELIMITER + product.getId(), "InStock e задължително");
		}

		if (!this.isProductQuantityValid(product.getQuantity())) {
			errors.rejectValue("", "productQuantity" + DELIMITER + product.getId(),
					"Quantity трябва да е по - голямо от 0");
		}

		if (!this.isProductOnSalePercentValid(product.getOnSalePercent())) {
			errors.rejectValue("", "productQuantity" + DELIMITER + product.getId(),
					"Процент на промоция, трябва да е между 0 и 100");
		}

		if (!this.isProductCategoryValid(product.getCategory())) {
			errors.rejectValue("", "productCategory" + DELIMITER + product.getId(), "Категорията, е задължителна.");
		}

		if (!this.isProductPriceValid(product.getPrice())) {
			errors.rejectValue("", "productPrice" + DELIMITER + product.getId(), "Цената, е задължителна.");
		}

		if (!this.isProductCardsPerPackValid(product.getCardsPerPack())) {
			errors.rejectValue("", "productCardsPerPack" + DELIMITER + product.getId(), "Брой карти, е задължително.");
		}
		if (!this.isProductDateValid(product.getLaunchDate())) {
			errors.rejectValue("", "productLaunchDate" + DELIMITER + product.getId(),
					"Дата на излизане, е задължително.");
		}

		if (!this.isProductDateValid(product.getKonamiTournamentLegalDate())) {
			errors.rejectValue("", "productKonamiTournamentLegalDate" + DELIMITER + product.getId(),
					"Дата за турнири, е задължително.");
		}

		if (!this.isProductDateValid(product.getTournamentStoreLaunchDate())) {
			errors.rejectValue("", "productTournamentStoreLaunchDate" + DELIMITER + product.getId(),
					"Дата за продаване в магазин, е задължително.");
		}

		if (!this.isProductImageValid(product.getPhoto1Base64())) {
			errors.rejectValue("", "productPhoto1" + DELIMITER + product.getId(),
					"Първото изображение е задължително.");
		}

		this.categoryValidator.validateCategory(product.getCategory());

		String validationMsg = "product exception";
		throwInvalidException(errors, validationMsg);

	}

	public Boolean isProductNameMINLenghtValid(String name) {
		if (name != null && name.length() > PRODUCT_NAME_MIN_LENGHT) {
			return true;
		}
		return false;
	}

	public Boolean isProductDescMINLenghtValid(String desc) {
		if (desc != null && desc.length() > PRODUCT_DESC_MIN_LENGHT) {
			return true;
		}
		return false;
	}

	public Boolean isProductNameMAXLengthValid(String name) {
		if (name != null && name.length() < PRODUCT_NAME_MAX_LENGHT) {
			return true;
		}
		return false;
	}

	public Boolean isProductDescMAXLengthValid(String desc) {
		if (desc != null && desc.length() < PRODUCT_DESC_MAX_LENGHT) {
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
		if (quantity != null && quantity > 0) {
			return true;
		}
		return false;
	}

	public Boolean isProductOnSalePercentValid(Integer onSalePercent) {
		if (onSalePercent != null && onSalePercent >= 0 && onSalePercent < 101) {
			return true;
		}
		return false;
	}

	public Boolean isProductCardsPerPackValid(Integer cardsPerPack) {
		if (cardsPerPack != null && cardsPerPack > 0) {
			return true;
		}
		return false;
	}

	public Boolean isProductDateValid(Date date) {
		if (date != null) {
			Calendar cal = Calendar.getInstance();
			cal.setLenient(false);
			cal.setTime(date);
			try {
				cal.getTime();
			} catch (Exception e) {
				return false;
			}
			return true;
		}
		return false;
	}

	public Boolean isProductPriceValid(Float price) {
		if (price != null && price >= 0) {
			return true;
		}
		return false;
	}

	public Boolean isProductImageValid(String imageSrc) {
		if (imageSrc != null && imageSrc.length() > 0) {
			return true;
		}
		return false;
	}
	
}
