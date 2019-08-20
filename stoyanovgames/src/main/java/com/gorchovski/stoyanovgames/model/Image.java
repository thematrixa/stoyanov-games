package com.gorchovski.stoyanovgames.model;

import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Lob;
import javax.persistence.Table;
import javax.validation.constraints.NotNull;

import com.gorchovski.stoyanovgames.model.enums.ImagePlacementEnum;

@Entity
@Table(name = "images")
public class Image {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Integer id;
	@Enumerated(EnumType.ORDINAL)
	@NotNull
	private ImagePlacementEnum imagePlacement;
	@Lob
	private String imageBase64Src;
	
	public Integer getId() {
		return id;
	}
	public void setId(Integer id) {
		this.id = id;
	}
	public ImagePlacementEnum getImagePlacement() {
		return imagePlacement;
	}
	public void setImagePlacement(ImagePlacementEnum imagePlacement) {
		this.imagePlacement = imagePlacement;
	}
	public String getImageBase64Src() {
		return imageBase64Src;
	}
	public void setImageBase64Src(String imageBase64Src) {
		this.imageBase64Src = imageBase64Src;
	}
}
