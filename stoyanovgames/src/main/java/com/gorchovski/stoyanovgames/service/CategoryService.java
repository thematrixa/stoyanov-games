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
 
    public List<Category> selectAll() {
        return categoryRepository.findAll();
    }
    
    public void batchInsertUpdate(List<Category> list) {
        categoryRepository.saveAll(list);
    }

    public void truncate() {
        categoryRepository.deleteAll();
    }
    //@Value(/*ANY NAME GOES HERE FROM APP PROPERTIES"${fb.keystore.etlog.name}"*/)
    //private String eTlogKeystoreName;
}
