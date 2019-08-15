package com.gorchovski.stoyanovgames.service;

import java.util.Iterator;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.gorchovski.stoyanovgames.excetion.StoyanovGamesValidationException;
import com.gorchovski.stoyanovgames.model.News;
import com.gorchovski.stoyanovgames.repository.NewsRepository;
import com.gorchovski.stoyanovgames.validator.NewsValidator;

@Transactional
@Service
public class NewsService {

	// @Value(/*ANY NAME GOES HERE FROM APP PROPERTIES"${fb.keystore.etlog.name}"*/)
	// private String eTlogKeystoreName;
	@Autowired
	private NewsRepository newsRepository;
	@Autowired
	private NewsValidator newsValidator;

	public List<News> list() {
		return this.newsRepository.findAll();
	}

	@PreAuthorize("hasAuthority('ADMIN')")
	public void batchInsertUpdate(List<News> feNews) throws StoyanovGamesValidationException {
		List<News> dbNews = newsRepository.findAll();
		boolean newsExists = false;
		for (Iterator<News> db = dbNews.iterator(); db.hasNext();) {
			News dbNewss = db.next();
			for (Iterator<News> fe = feNews.iterator(); fe.hasNext();) {
				News feCategory = fe.next();
				newsValidator.validateNews(feCategory);
				if (dbNewss.getId().equals(feCategory.getId())) {
					newsExists = true;
				}
			}
			if (!newsExists) {
				newsRepository.delete(dbNewss);
			}
			newsExists = false;
		}
		newsRepository.saveAll(feNews);
	}

	@PreAuthorize("hasAuthority('ADMIN')")
	public void truncate() {
		this.newsRepository.deleteAll();
	}
}
