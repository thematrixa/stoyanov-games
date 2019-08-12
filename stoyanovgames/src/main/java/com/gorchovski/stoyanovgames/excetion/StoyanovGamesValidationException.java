package com.gorchovski.stoyanovgames.excetion;

import org.springframework.validation.Errors;

public class StoyanovGamesValidationException extends Exception{
	private static final long serialVersionUID = 8370163225294378278L;

    private String validationMsg;
    private Errors errors;

    public StoyanovGamesValidationException(String validationMsg) {
        super(new Exception(validationMsg));
        this.setValidationMsg(validationMsg);
        this.setErrors(null);
    }

    public StoyanovGamesValidationException(String validationMsg, Errors errors) {
        super(new Exception(validationMsg));
        this.setValidationMsg(validationMsg);
        this.setErrors(errors);
    }

    public String getValidationMsg() {
        return validationMsg;
    }

    public void setValidationMsg(String validationMsg) {
        this.validationMsg = validationMsg;
    }

    public Errors getErrors() {
        return errors;
    }

    public void setErrors(Errors errors) {
        this.errors = errors;
    }

}
