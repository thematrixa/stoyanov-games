package com.gorchovski.stoyanovgames.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.gorchovski.stoyanovgames.model.Category;
import com.gorchovski.stoyanovgames.repository.CategoryRepository;

@Service
public class CategoryService {
	
	@Autowired
    private CategoryRepository categoryRepository;
 
    public List<Category> list() {
        return categoryRepository.findAll();
    }

    //@Value(/*ANY NAME GOES HERE FROM APP PROPERTIES"${fb.keystore.etlog.name}"*/)
    //private String eTlogKeystoreName;
}
