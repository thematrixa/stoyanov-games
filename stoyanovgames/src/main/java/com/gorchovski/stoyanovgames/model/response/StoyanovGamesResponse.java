package com.gorchovski.stoyanovgames.model.response;

public class StoyanovGamesResponse<T> {
    private T response;

    public StoyanovGamesResponse(T response) {
    	setResponse(response);
    }

    public T getResponse() {
        return response;
    }

    public void setResponse(T response) {
        this.response = response;
    }

}