package com.gorchovski.stoyanovgames.model;

import java.util.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Lob;
import javax.persistence.ManyToOne;
import javax.persistence.Table;
import javax.validation.constraints.NotNull;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.gorchovski.stoyanovgames.utils.Constants;

@Entity
@Table(name = "products")
public class Product {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Integer id;
	@NotNull
	private String name;
	@NotNull
	private String description;
	@NotNull
	private Float price;
	// @JsonDeserialize(using = DateParser.class)
	// @JsonFormat(shape = JsonFormat.Shape.STRING, pattern = "dd.MM.yyyy")
	private Date tournamentStoreLaunchDate;
	// @DateTimeFormat(pattern = "dd.MM.yyyy")
	// @JsonDeserialize(using = DateParser.class)
	// @JsonFormat(shape = JsonFormat.Shape.STRING, pattern = "dd.MM.yyyy")
	private Date launchDate;
	// @JsonDeserialize(using = DateParser.class)
	// @JsonFormat(shape = JsonFormat.Shape.STRING, pattern = "dd.MM.yyyy")
	private Date konamiTournamentLegalDate;
	@JsonProperty("cardsPerPack")
	private Integer cardsPerPack;
	private Boolean isActive;
	@ManyToOne
	@NotNull
	private Category category;
	@NotNull
	private Boolean inStock;
	@Column(columnDefinition = "integer default 0")
	private Boolean isDeleted;

	@NotNull
	private Integer quantity;
	private Float rating;
	@NotNull
	@Column(columnDefinition = "integer default 0")
	private Integer onSalePercent;
	private Integer five_stars;
	private Integer four_stars;
	private Integer three_stars;
	private Integer two_stars;
	private Integer one_stars;
	// @JsonFormat(shape = JsonFormat.Shape.STRING, pattern = "dd.MM.yyyy")
	private Date dateAdded;
	@Lob
	private String photo1Base64;
	@Lob
	private String photo2Base64;
	@Lob
	private String photo3Base64;
	@Lob
	private String photo4Base64;
	@Lob
	private String photo5Base64;

	public Integer getId() {
		return id;
	}

	public void setId(Integer id) {
		this.id = id;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}

	public Float getPrice() {
		return price;
	}

	public void setPrice(Float price) {
		this.price = price;
	}

	public Date getTournamentStoreLaunchDate() {
		return tournamentStoreLaunchDate;
	}

	public void setTournamentStoreLaunchDate(Date tournamentStoreLaunchDate) {
		this.tournamentStoreLaunchDate = tournamentStoreLaunchDate;
	}

	public Date getLaunchDate() {
		return launchDate;
	}

	public void setLaunchDate(Date launchDate) {
		this.launchDate = launchDate;
	}

	public Date getKonamiTournamentLegalDate() {
		return konamiTournamentLegalDate;
	}

	public void setKonamiTournamentLegalDate(Date konamiTournamentLegalDate) {
		this.konamiTournamentLegalDate = konamiTournamentLegalDate;
	}

	public Integer getCardsPerPack() {
		return cardsPerPack;
	}

	public void setCardsPerPack(Integer cardsPerPack) {
		this.cardsPerPack = cardsPerPack;
	}

	public Boolean getIsActive() {
		return isActive;
	}

	public void setIsActive(Boolean isActive) {
		this.isActive = isActive;
	}

	public Boolean getInStock() {
		return inStock;
	}

	public void setInStock(Boolean inStock) {
		this.inStock = inStock;
	}

	public Integer getQuantity() {
		return quantity;
	}

	public void setQuantity(Integer quantity) {
		this.quantity = quantity;
	}

	public Integer getOnSalePercent() {
		return onSalePercent;
	}

	public void setOnSalePercent(Integer onSalePercent) {
		this.onSalePercent = onSalePercent;
	}

	public Date getDateAdded() {
		return dateAdded;
	}

	public void setDateAdded(Date dateAdded) {
		this.dateAdded = dateAdded;
	}

	public String getPhoto1Base64() {
		return photo1Base64;
	}

	public void setPhoto1Base64(String photo1Base64) {
		if(photo1Base64 == null) {
			photo1Base64 = Constants.EMPTY_IMAGE;
		}
		this.photo1Base64 = photo1Base64;
	}

	public Category getCategory() {
		return category;
	}

	public void setCategory(Category category) {
		this.category = category;
	}

	public String getPhoto2Base64() {
		return photo2Base64;
	}

	public void setPhoto2Base64(String photo2Base64) {
		if(photo2Base64 == null) {
			photo2Base64 = Constants.EMPTY_IMAGE;
		}
		this.photo2Base64 = photo2Base64;
	}

	public String getPhoto3Base64() {
		return photo3Base64;
	}

	public void setPhoto3Base64(String photo3Base64) {
		if(photo3Base64 == null) {
			photo3Base64 = Constants.EMPTY_IMAGE;
		}
		this.photo3Base64 = photo3Base64;
	}

	public String getPhoto4Base64() {
		return photo4Base64;
	}

	public void setPhoto4Base64(String photo4Base64) {
		if(photo4Base64 == null) {
			photo4Base64 = Constants.EMPTY_IMAGE;
		}
		this.photo4Base64 = photo4Base64;
	}

	public String getPhoto5Base64() {
		return photo5Base64;
	}

	public void setPhoto5Base64(String photo5Base64) {
		if(photo5Base64 == null) {
			photo5Base64 = Constants.EMPTY_IMAGE;
		}
		this.photo5Base64 = photo5Base64;
	}

	public Integer getFive_stars() {
		return five_stars;
	}

	public void setFive_stars(Integer five_stars) {
		this.five_stars = five_stars;
	}

	public Integer getFour_stars() {
		return four_stars;
	}

	public void setFour_stars(Integer four_stars) {
		this.four_stars = four_stars;
	}

	public Integer getThree_stars() {
		return three_stars;
	}

	public void setThree_stars(Integer three_stars) {
		this.three_stars = three_stars;
	}

	public Integer getTwo_stars() {
		return two_stars;
	}

	public void setTwo_stars(Integer two_stars) {
		this.two_stars = two_stars;
	}

	public Integer getOne_stars() {
		return one_stars;
	}

	public void setOne_stars(Integer one_stars) {
		this.one_stars = one_stars;
	}

	public Float getRating() {
		return rating;
	}

	public void setRating(Float rating) {
		this.rating = rating;
	}

	public Boolean getIsDeleted() {
		return isDeleted;
	}

	public void setIsDeleted(Boolean isDeleted) {
		this.isDeleted = isDeleted;
	}
}
