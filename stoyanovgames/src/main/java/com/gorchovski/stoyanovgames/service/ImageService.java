package com.gorchovski.stoyanovgames.service;

import java.util.Iterator;
import java.util.List;

import javax.annotation.PostConstruct;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.gorchovski.stoyanovgames.excetion.StoyanovGamesValidationException;
import com.gorchovski.stoyanovgames.model.Image;
import com.gorchovski.stoyanovgames.model.enums.ImagePlacementEnum;
import com.gorchovski.stoyanovgames.repository.ImageRepository;
import com.gorchovski.stoyanovgames.utils.Constants;
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

	public Image getBackgroundImage() {
		return this.imagesRepository.getImageByPlacement(ImagePlacementEnum.BACKGROUND);
	}

	public Image getLeftImage() {
		return this.imagesRepository.getImageByPlacement(ImagePlacementEnum.LEFT_IMAGE);
	}

	public Image getRightImage() {
		return this.imagesRepository.getImageByPlacement(ImagePlacementEnum.RIGHT_IMAGE);
	}

	public Image getHeaderImage() {
		return this.imagesRepository.getImageByPlacement(ImagePlacementEnum.HEADER);
	}

	public void batchInsertUpdate(List<Image> feImages) throws StoyanovGamesValidationException {
		for (Iterator<Image> fe = feImages.iterator(); fe.hasNext();) {
			Image feImage = fe.next();
			this.imagesValidator.validateImage(feImage);
		}
		this.imagesRepository.saveAll(feImages);

	}

	@PostConstruct
	public void loadInitialData() {
		if(this.imagesRepository.count()>0)return;
		Image image1 = new Image(1, ImagePlacementEnum.BACKGROUND, Constants.EMPTY_IMAGE);
		Image image2 = new Image(2, ImagePlacementEnum.HEADER, Constants.EMPTY_IMAGE);
		Image image3 = new Image(3, ImagePlacementEnum.LEFT_IMAGE, Constants.EMPTY_IMAGE);
		Image image4 = new Image(4, ImagePlacementEnum.RIGHT_IMAGE, Constants.EMPTY_IMAGE);
		this.imagesRepository.save(image1);
		this.imagesRepository.save(image2);
		this.imagesRepository.save(image3);
		this.imagesRepository.save(image4);
	}

	@PostConstruct
	public void changeMaxAllowedPacketSize() {
		this.imagesRepository.changePacketMaxSize(Constants.MAX_PACKET_SIZE);
	}
}
