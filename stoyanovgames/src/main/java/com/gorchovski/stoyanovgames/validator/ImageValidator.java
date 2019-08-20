package com.gorchovski.stoyanovgames.validator;

import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.persistence.Lob;
import javax.validation.constraints.NotNull;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Component;
import org.springframework.validation.BeanPropertyBindingResult;
import org.springframework.validation.Errors;

import com.gorchovski.stoyanovgames.excetion.StoyanovGamesValidationException;
import com.gorchovski.stoyanovgames.model.Image;
import com.gorchovski.stoyanovgames.model.enums.ImagePlacementEnum;

@Component
public class ImageValidator extends BasicValidator {

	private final Integer ADDRESS_NAME_MIN_LENGHT = 10;
	private final Integer ADDRESS_NAME_MAX_LENGHT = 50;
	private final char DELIMITER = '.';
	private final Logger logger = LoggerFactory.getLogger(ImageValidator.class);

	public ImageValidator() {

	}

	public void validateImage(Object target) throws StoyanovGamesValidationException {
		Image image = (Image) target;
		Errors errors = new BeanPropertyBindingResult(image, "image");
		if (!this.isIdValid(image.getId())) {
			errors.rejectValue("", "imageId",
					"Не е намерено изображение.");
		}
		if (!this.isProductImageValid(image.getImageBase64Src())) {
			errors.rejectValue("", "imageImageBase64Src" + DELIMITER + image.getId(),
					"Изображението е задължително.");
		}

		if (!this.isPlacementValid(image.getImagePlacement())) {
			errors.rejectValue("", "orderPlacement" + DELIMITER + image.getId(), "Типа изображение e невалиден");
		}
		String validationMsg = "address name exception";
		throwInvalidException(errors, validationMsg);
	}


	public Boolean isAddressNameMAXLenghtValid(String name) {
		if (name != null && name.length() < ADDRESS_NAME_MAX_LENGHT) {
			return true;
		}
		return false;
	}
	public Boolean isAddressNameMINLengthValid(String name) {
		if (name != null && name.length() > ADDRESS_NAME_MIN_LENGHT) {
			return true;
		}
		return false;
	}
	

	public Boolean isPlacementValid(ImagePlacementEnum placement) {
		if (placement != null) {
			for (ImagePlacementEnum temp : ImagePlacementEnum.values()) {
		        if (temp.name().equals(placement.name())) {
		            return true;
		        }
		    }
		}
		return false;
	}

	public Boolean isProductImageValid(String imageSrc) {
		if (imageSrc != null && imageSrc.length() > 0) {
			return true;
		}
		return false;
	}

	public Boolean isIdValid(Integer id) {
		if (id != null) {
			return true;
		}
		return false;
	}
	private Integer id;
	@Enumerated(EnumType.ORDINAL)
	@NotNull
	private ImagePlacementEnum imagePlacement;
	@Lob
	private String imageBase64Src;
	
}
