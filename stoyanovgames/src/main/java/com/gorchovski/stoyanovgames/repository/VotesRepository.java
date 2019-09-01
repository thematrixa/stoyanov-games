package com.gorchovski.stoyanovgames.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.gorchovski.stoyanovgames.model.User;
import com.gorchovski.stoyanovgames.model.Votes;

@Repository
public interface VotesRepository extends JpaRepository<Votes, Long>  {
	List<Votes> findByUserAndProductId(User user, Integer productId);
	List<Votes> findByUser(User user);
	List<Votes> findByProductId(Integer productId);
	void deleteByProductId(Integer productId);
	void deleteByUser(User user);
}
