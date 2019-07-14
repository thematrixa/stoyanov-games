package com.gorchovski.stoyanovgames.model;

import java.util.Date;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonFormat;
import com.fasterxml.jackson.annotation.JsonProperty;

@Entity
@Table(name = "products")
public class Product {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
	private Integer id;
	private String name;
	private String description;
	private String price;
	private String type;
	@JsonFormat(shape = JsonFormat.Shape.STRING, pattern = "dd.MM.yyyy")
	private Date tournamentStoreLaunchDate;
	@JsonFormat(shape = JsonFormat.Shape.STRING, pattern = "dd.MM.yyyy")
	private Date launchDate;
	@JsonFormat(shape = JsonFormat.Shape.STRING, pattern = "dd.MM.yyyy")
	private Date konamiTournamentLegalDate;
	@JsonProperty("cardsPerPack")
	private Integer cardsPerPack;
	private String size;
	private Integer isActive;
	private Integer categoryId;
	private String shortDescription;
	private Integer inStock;
	private Integer quantity;
	private Integer onSalePercent;
	@JsonFormat(shape = JsonFormat.Shape.STRING, pattern = "dd.MM.yyyy")
	private Date dateAdded;
	private String photo1Base64;
	private String photo2Base64;
	private String photo3Base64;
	private String photo4Base64;
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
	public String getPrice() {
		return price;
	}
	public void setPrice(String price) {
		this.price = price;
	}
	public String getType() {
		return type;
	}
	public void setType(String type) {
		this.type = type;
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
	public String getSize() {
		return size;
	}
	public void setSize(String size) {
		this.size = size;
	}
	public Integer getIsActive() {
		return isActive;
	}
	public void setIsActive(Integer isActive) {
		this.isActive = isActive;
	}
	public Integer getCategoryId() {
		return categoryId;
	}
	public void setCategoryId(Integer categoryId) {
		this.categoryId = categoryId;
	}
	public String getShortDescription() {
		return shortDescription;
	}
	public void setShortDescription(String shortDescription) {
		this.shortDescription = shortDescription;
	}
	public Integer getInStock() {
		return inStock;
	}
	public void setInStock(Integer inStock) {
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
		this.photo1Base64 = photo1Base64;
	}
	public String getPhoto2Base64() {
		return photo2Base64;
	}
	public void setPhoto2Base64(String photo2Base64) {
		this.photo2Base64 = photo2Base64;
	}
	public String getPhoto3Base64() {
		return photo3Base64;
	}
	public void setPhoto3Base64(String photo3Base64) {
		this.photo3Base64 = photo3Base64;
	}
	public String getPhoto4Base64() {
		return photo4Base64;
	}
	public void setPhoto4Base64(String photo4Base64) {
		this.photo4Base64 = photo4Base64;
	}
	public String getPhoto5Base64() {
		return photo5Base64;
	}
	public void setPhoto5Base64(String photo5Base64) {
		this.photo5Base64 = photo5Base64;
	}

}
