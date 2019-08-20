package com.gorchovski.stoyanovgames.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.gorchovski.stoyanovgames.model.Category;

@Repository
public interface CategoryRepository extends JpaRepository<Category, Long>  {
	Category findById(Integer id);
}
