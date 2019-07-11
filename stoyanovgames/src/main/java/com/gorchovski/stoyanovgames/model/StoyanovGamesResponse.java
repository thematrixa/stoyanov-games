package com.gorchovski.stoyanovgames.model;

public class StoyanovGamesResponse<T> {
    private T response;

    public StoyanovGamesResponse(T response) {
        setData(response);
    }

    public T getData() {
        return response;
    }

    public void setData(T response) {
        this.response = response;
    }

}