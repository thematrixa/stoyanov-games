package com.gorchovski.stoyanovgames.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.gorchovski.stoyanovgames.model.News;

@Repository
public interface NewsRepository extends JpaRepository<News, Long>   {

}
