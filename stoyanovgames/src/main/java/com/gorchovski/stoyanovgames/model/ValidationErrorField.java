package com.gorchovski.stoyanovgames.model;

import java.io.Serializable;

public class ValidationErrorField implements Serializable {

    private static final long serialVersionUID = -943242952153648899L;

    private String objectName;
    private String field;
    private String errorCode;
    private String defaultMessage;

    public ValidationErrorField(String objectName, String field, String errorCode, String defaultMessage) {
        super();
        this.objectName = objectName;
        this.field = field;
        this.errorCode = errorCode;
        this.defaultMessage = defaultMessage;
    }
    public ValidationErrorField() {
        super();
    }
    public String getObjectName() {
        return objectName;
    }

    public void setObjectName(String objectName) {
        this.objectName = objectName;
    }

    public String getField() {
        return field;
    }

    public void setField(String field) {
        this.field = field;
    }

    public String getErrorCode() {
        return errorCode;
    }

    public void setErrorCode(String errorCode) {
        this.errorCode = errorCode;
    }

    public String getDefaultMessage() {
        return defaultMessage;
    }

    public void setDefaultMessage(String defaultMessage) {
        this.defaultMessage = defaultMessage;
    }

    @Override
    public String toString() {
        StringBuilder output = new StringBuilder();
        output.append("objectName: ").append(objectName).append(", field: ").append(field).append(", errorCode: ").append(errorCode)
                .append(", defaultMessage: ").append(defaultMessage);
        return output.toString();
    }
}