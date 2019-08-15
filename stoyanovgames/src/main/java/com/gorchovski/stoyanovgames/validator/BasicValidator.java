package com.gorchovski.stoyanovgames.validator;

import java.util.ArrayList;
import java.util.List;

import org.springframework.validation.Errors;
import org.springframework.validation.ObjectError;

import com.gorchovski.stoyanovgames.excetion.StoyanovGamesValidationException;
import com.gorchovski.stoyanovgames.model.ValidationErrorField;

public class BasicValidator {
		
	public void throwInvalidException(Errors errors, String validationMsg) throws StoyanovGamesValidationException {
		if (errors.hasErrors()) {
			throw new StoyanovGamesValidationException(validationMsg, getErrorFields(errors));
		}
	}
	
	public List<ValidationErrorField> getErrorFields(Errors errors){
		List<ValidationErrorField> vef = new ArrayList<ValidationErrorField>();
		
		for(ObjectError o : errors.getAllErrors()) {
			ValidationErrorField v = new ValidationErrorField();
			v.setErrorCode(o.getCode());
			v.setDefaultMessage(o.getDefaultMessage());
			v.setObjectName(o.getObjectName());
			vef.add(v);
		}
		return vef;
	}
}
