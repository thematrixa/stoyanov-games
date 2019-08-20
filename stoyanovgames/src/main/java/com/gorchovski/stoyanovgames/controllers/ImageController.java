package com.gorchovski.stoyanovgames.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.gorchovski.stoyanovgames.excetion.StoyanovGamesValidationException;
import com.gorchovski.stoyanovgames.model.Image;
import com.gorchovski.stoyanovgames.model.response.StoyanovGamesResponse;
import com.gorchovski.stoyanovgames.service.ImageService;

@CrossOrigin(origins = "http://localhost:4200", allowedHeaders = "*")
@RestController
@RequestMapping("/images")
public class ImageController {
	
	private final ImageService imageService;

	@Autowired
	public ImageController(ImageService imageService) {
		this.imageService = imageService;
	}

	@RequestMapping(produces = "application/json", method = RequestMethod.GET, value = "/get")
	public StoyanovGamesResponse<?> getCategories() {
		return new StoyanovGamesResponse<>(this.imageService.selectAll());
	}

    @PreAuthorize("hasAuthority('ADMIN')")
	@RequestMapping(method = RequestMethod.POST, value = "/update", consumes="application/json")
	public ResponseEntity<?> uploadImage(
			@RequestBody Image image) throws StoyanovGamesValidationException {
		this.imageService.update(image);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
	}

}