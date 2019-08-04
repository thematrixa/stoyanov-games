package com.gorchovski.stoyanovgames.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.gorchovski.stoyanovgames.model.Votes;

@Repository
public interface VotesRepository extends JpaRepository<Votes, Long>  {
	List<Votes> findByUsernameAndProductId(String username, Integer productId);
	List<Votes> findByUsername(String username);
	List<Votes> findByProductId(Integer productId);
	void deleteByProductId(Integer productId);
	void deleteByUsername(String username);
}
