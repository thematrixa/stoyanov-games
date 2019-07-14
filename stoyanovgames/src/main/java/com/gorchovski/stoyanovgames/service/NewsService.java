package com.gorchovski.stoyanovgames.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.gorchovski.stoyanovgames.model.News;
import com.gorchovski.stoyanovgames.repository.NewsRepository;

@Service
public class NewsService {

    //@Value(/*ANY NAME GOES HERE FROM APP PROPERTIES"${fb.keystore.etlog.name}"*/)
    //private String eTlogKeystoreName;
	@Autowired
    private NewsRepository newsRepository;
 
    public List<News> list() {
        return this.newsRepository.findAll();
    }

    public void batchInsertUpdate(List<News> list) {
    	this.newsRepository.saveAll(list);
    }

    public void truncate() {
    	this.newsRepository.deleteAll();
    }
}
