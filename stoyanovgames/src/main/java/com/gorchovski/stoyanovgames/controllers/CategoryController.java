package com.gorchovski.stoyanovgames.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.gorchovski.stoyanovgames.model.Category;
import com.gorchovski.stoyanovgames.model.StoyanovGamesResponse;
import com.gorchovski.stoyanovgames.service.CategoryService;

@CrossOrigin(origins = "*", allowedHeaders = "*")
@RestController
@RequestMapping("/categories")
public class CategoryController {

	private final CategoryService categoryService;

	@Autowired
	public CategoryController(CategoryService categoryService) {
		this.categoryService = categoryService;
	}

	// Example method
	/*
	 * @RequestMapping(produces = "application/json", method = RequestMethod.GET,
	 * //value =
	 * "/providers/tooltip/{providerId}/{serviceId}/{searchParamName}/{currentDate}")
	 * value = "/1") public StoyanovGamesResponse<?>
	 * getSearchParamTooltip(@PathVariable(value = "providerId") int providerId,
	 * 
	 * @PathVariable(value = "serviceId") int serviceId, @PathVariable(value =
	 * "searchParamName") String searchParamName,
	 * 
	 * @PathVariable("currentDate") String date) { //var variable =
	 * this.categoryService.getSearchParamTooltip(providerId, serviceId,
	 * searchParamName); System.out.println(this.categoryService.list()); return new
	 * StoyanovGamesResponse<>(this.categoryService.list()); }
	 */
	@RequestMapping(produces = "application/json", method = RequestMethod.GET, value = "/get")
	public StoyanovGamesResponse<?> getCategories() {
		return new StoyanovGamesResponse<>(this.categoryService.selectAll());
	}
	
	@RequestMapping(produces = "application/json", method = RequestMethod.GET, value = "/update")
	public void uploadCategories(
			@RequestBody List<Category> list) {
		this.categoryService.batchInsertUpdate(list);
	}

}