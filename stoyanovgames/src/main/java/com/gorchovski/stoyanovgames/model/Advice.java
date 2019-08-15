package com.gorchovski.stoyanovgames.model;


import java.util.Date;
import java.util.List;

import com.fasterxml.jackson.annotation.JsonFormat;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

@JsonIgnoreProperties({"httpCode"})
public class Advice {

    private String messageText;
    private String originSubSystem;
    @JsonFormat(shape = JsonFormat.Shape.STRING, pattern = "yyyy-MM-dd'T'HH:mm:ss")
    private Date timestamp;
    private Short maximumSeverityCode;
    private Short status;
    private List<ValidationErrorField> errors;
    private Short httpCode;

    public String getMessageText() {
        return messageText;
    }

    public void setMessageText(String messageText) {
        this.messageText = messageText;
    }

    public String getOriginSubSystem() {
        return originSubSystem;
    }

    public void setOriginSubSystem(String originSubSystem) {
        this.originSubSystem = originSubSystem;
    }

    public Date getTimestamp() {
        return timestamp;
    }

    public void setTimestamp(Date timestamp) {
        this.timestamp = timestamp;
    }

    public Short getMaximumSeverityCode() {
        return maximumSeverityCode;
    }

    public void setMaximumSeverityCode(Short maximumSeverityCode) {
        this.maximumSeverityCode = maximumSeverityCode;
    }

    public Short getStatus() {
        return status;
    }

    public void setStatus(Short status) {
        this.status = status;
    }

    public List<ValidationErrorField> getErrors() {
        return errors;
    }

    public void setErrors(List<ValidationErrorField> errors) {
        this.errors = errors;
    }

    public Short getHttpCode() {
        return httpCode;
    }

    public void setHttpCode(Short httpCode) {
        this.httpCode = httpCode;
    }

    @Override
    public String toString() {
        return "Advice [messageText=" + messageText + ", originSubSystem=" + originSubSystem + ", status=" + status + ", timestamp="
                + timestamp + ", maximumSeverityCode=" + maximumSeverityCode + ", status=" + status + ", errors=" + errors + ", httpCode="
                + httpCode + "]";
    }
}