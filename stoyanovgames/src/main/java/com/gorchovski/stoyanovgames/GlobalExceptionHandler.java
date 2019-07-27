package com.gorchovski.stoyanovgames;

import java.sql.SQLException;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.dao.DataAccessException;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Component;
import org.springframework.web.bind.MethodArgumentNotValidException;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.ResponseStatus;

import com.gorchovski.stoyanovgames.model.ErrorResponse;


@ControllerAdvice
@Component
public class GlobalExceptionHandler {
    private final Logger logger = LoggerFactory.getLogger(GlobalExceptionHandler.class);

    @ExceptionHandler(MethodArgumentNotValidException.class)
    @ResponseBody
    @ResponseStatus(HttpStatus.BAD_REQUEST)
    public ErrorResponse handleException(MethodArgumentNotValidException exception) {
        logger.error("[handleBADRequestException]", exception);
        return ErrorResponse.buildFromException(exception);
    }

    @ExceptionHandler(org.springframework.security.access.AccessDeniedException.class)
    @ResponseBody
    @ResponseStatus(HttpStatus.FORBIDDEN)
    public ErrorResponse handleRightsException(Exception exception) {
        logger.error("[handleRightsException]", exception);
        return ErrorResponse.buildFromException(exception);
    }
    @ExceptionHandler(org.springframework.orm.jpa.JpaObjectRetrievalFailureException.class)
    @ResponseBody
    @ResponseStatus(HttpStatus.NOT_FOUND)
    public ErrorResponse handleJPANotFoundException(Exception exception) {
        logger.error("[handleRightsException]", exception);
        return ErrorResponse.buildFromException(exception);
    }
    @ExceptionHandler({DataAccessException.class, SQLException.class, Exception.class})
    @ResponseBody
    @ResponseStatus(HttpStatus.INTERNAL_SERVER_ERROR)
    public ErrorResponse handleGeneralException(Exception exception) {
        logger.error("[handleGeneralException]", exception);
        return ErrorResponse.buildFromException(exception);
    }
}