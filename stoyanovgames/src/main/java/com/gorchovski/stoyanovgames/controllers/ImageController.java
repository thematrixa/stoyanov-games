package com.gorchovski.stoyanovgames.controllers;

import java.util.List;

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
	public StoyanovGamesResponse<?> getImages() {
		return new StoyanovGamesResponse<>(this.imageService.selectAll());
	}

    @PreAuthorize("hasAuthority('ADMIN')")
	@RequestMapping(method = RequestMethod.POST, value = "/update", consumes="application/json")
	public ResponseEntity<?> uploadImage(
			@RequestBody Image image) throws StoyanovGamesValidationException {
		this.imageService.update(image);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
	}
    @PreAuthorize("hasAuthority('ADMIN')")
	@RequestMapping(method = RequestMethod.POST, value = "/set", consumes="application/json")
	public ResponseEntity<?> uploadImages(
			@RequestBody List<Image> images) throws StoyanovGamesValidationException {
		this.imageService.batchInsertUpdate(images);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
	}
	@RequestMapping(produces = "application/json", method = RequestMethod.GET, value = "/get/header")
	public StoyanovGamesResponse<?> getHeaderImage() {
		return new StoyanovGamesResponse<>(this.imageService.getHeaderImage());
	}

	@RequestMapping(produces = "application/json", method = RequestMethod.GET, value = "/get/background")
	public StoyanovGamesResponse<?> getBackgroundImage() {
		return new StoyanovGamesResponse<>(this.imageService.getBackgroundImage());
	}
	
	@RequestMapping(produces = "application/json", method = RequestMethod.GET, value = "/get/left-image")
	public StoyanovGamesResponse<?> getLeftImage() {
		return new StoyanovGamesResponse<>(this.imageService.getLeftImage());
	}
	
	@RequestMapping(produces = "application/json", method = RequestMethod.GET, value = "/get/right-image")
	public StoyanovGamesResponse<?> getRightImage() {
		return new StoyanovGamesResponse<>(this.imageService.getRightImage());
	}
}