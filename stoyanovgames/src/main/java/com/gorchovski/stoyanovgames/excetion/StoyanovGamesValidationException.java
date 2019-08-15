package com.gorchovski.stoyanovgames.excetion;

import java.util.List;

import org.springframework.validation.Errors;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.gorchovski.stoyanovgames.model.ValidationErrorField;

public class StoyanovGamesValidationException extends Exception{

	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;
	@JsonProperty("validationMsg")
    private String validationMsg;
    //private Errors errors;
	@JsonProperty("errors")
    private List<ValidationErrorField> errors;

    public List<ValidationErrorField> getErrors() {
		return errors;
	}

	public void setErrors(List<ValidationErrorField> errors) {
		this.errors = errors;
	}

	public StoyanovGamesValidationException(String validationMsg) {
        super(new Exception());
        this.setValidationMsg(validationMsg);
        this.setErrors(null);
    }

    public StoyanovGamesValidationException(String validationMsg, Errors errors) {
        super(new Exception());
        this.setValidationMsg(validationMsg);
    //    this.setErrors(errors);
    }

    public StoyanovGamesValidationException(String validationMsg, List<ValidationErrorField> errors) {
        super(new Exception());
        this.setValidationMsg(validationMsg);
        this.setErrors(errors);
    }

    public String getValidationMsg() {
        return validationMsg;
    }

    public void setValidationMsg(String validationMsg) {
        this.validationMsg = validationMsg;
    }
/*
    public Errors getErrors() {
        return errors;
    }

    public void setErrors(Errors errors) {
        this.errors = errors;
    }
*/
}
