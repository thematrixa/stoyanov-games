package com.gorchovski.stoyanovgames.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.gorchovski.stoyanovgames.model.News;
import com.gorchovski.stoyanovgames.repository.NewsRepository;

@Transactional
@Service
public class NewsService {

    //@Value(/*ANY NAME GOES HERE FROM APP PROPERTIES"${fb.keystore.etlog.name}"*/)
    //private String eTlogKeystoreName;
	@Autowired
    private NewsRepository newsRepository;
 
    public List<News> list() {
        return this.newsRepository.findAll();
    }

    @PreAuthorize("hasAuthority('ADMIN')")
    public void batchInsertUpdate(List<News> list) {
    	this.newsRepository.saveAll(list);
    }

    @PreAuthorize("hasAuthority('ADMIN')")
    public void truncate() {
    	this.newsRepository.deleteAll();
    }
}
