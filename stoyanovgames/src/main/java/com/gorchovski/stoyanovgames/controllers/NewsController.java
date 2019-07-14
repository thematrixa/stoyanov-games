package com.gorchovski.stoyanovgames.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.gorchovski.stoyanovgames.model.Category;
import com.gorchovski.stoyanovgames.model.StoyanovGamesResponse;
import com.gorchovski.stoyanovgames.service.NewsService;


@CrossOrigin(origins = "http://localhost:4200", allowedHeaders = "*")
@RestController
@RequestMapping("/news")
public class NewsController {

	private final NewsService newsService;

	@Autowired
	public NewsController(NewsService newsService) {
		this.newsService = newsService;
	}

	@RequestMapping(produces = "application/json", method = RequestMethod.GET, value = "/get")
	public StoyanovGamesResponse<?> getNews() {
		return new StoyanovGamesResponse<>(this.newsService.list());
	}
	
	@RequestMapping(method = RequestMethod.POST, value = "/update", consumes="application/json")
	public ResponseEntity<?> uploadCategories(
			@RequestBody List<Category> list) {
		this.newsService.truncate();
		this.newsService.batchInsertUpdate(list);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
	}
}