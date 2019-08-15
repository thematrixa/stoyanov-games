package com.gorchovski.stoyanovgames.service;

import java.util.Iterator;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.gorchovski.stoyanovgames.excetion.StoyanovGamesValidationException;
import com.gorchovski.stoyanovgames.model.Category;
import com.gorchovski.stoyanovgames.repository.CategoryRepository;
import com.gorchovski.stoyanovgames.validator.CategoryValidator;

@Transactional
@Service
public class CategoryService {

	@Autowired
	private CategoryRepository categoryRepository;
	
	@Autowired
	private CategoryValidator categoryValidator;

	public List<Category> selectAll() {
		return categoryRepository.findAll();
	}

	@PreAuthorize("hasAuthority('ADMIN')")
	public void batchInsertUpdate(List<Category> feCategories) throws StoyanovGamesValidationException {
		
		List<Category> dbCategories = categoryRepository.findAll();
		boolean categoryExists = false;
		for (Iterator<Category> db = dbCategories.iterator(); db.hasNext();) {
			Category dbCategory = db.next();
			for (Iterator<Category> fe = feCategories.iterator(); fe.hasNext();) {
				Category feCategory = fe.next();
				categoryValidator.validateCategory(feCategory);
			    if(dbCategory.getId().equals(feCategory.getId())) {
			    	categoryExists = true;
			    }
			}
			if(!categoryExists) {
				categoryRepository.delete(dbCategory);
			}
			categoryExists = false;
		}
		categoryRepository.saveAll(feCategories);
	}

	@PreAuthorize("hasAuthority('ADMIN')")
	public void truncate() {
		categoryRepository.deleteAll();
	}
}
