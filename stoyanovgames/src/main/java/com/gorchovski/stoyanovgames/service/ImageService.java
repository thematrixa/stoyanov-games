package com.gorchovski.stoyanovgames.service;

import java.util.Iterator;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.gorchovski.stoyanovgames.excetion.StoyanovGamesValidationException;
import com.gorchovski.stoyanovgames.model.Category;
import com.gorchovski.stoyanovgames.model.Image;
import com.gorchovski.stoyanovgames.repository.ImageRepository;
import com.gorchovski.stoyanovgames.validator.ImageValidator;

@Transactional
@Service
public class ImageService {
	@Autowired
	private ImageRepository imagesRepository;
	@Autowired
	private ImageValidator imagesValidator;

	public List<Image> selectAll() {
		return imagesRepository.findAll();
	}

	@PreAuthorize("hasAuthority('ADMIN')")
	public void update(Image feImage) throws StoyanovGamesValidationException {
		this.imagesValidator.validateImage(feImage);
		imagesRepository.save(feImage);
	}

}
