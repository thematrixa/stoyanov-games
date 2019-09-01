package com.gorchovski.stoyanovgames.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.gorchovski.stoyanovgames.model.User;
import com.gorchovski.stoyanovgames.model.Votes;
import com.gorchovski.stoyanovgames.repository.VotesRepository;

@Transactional
@Service
public class VotesService {

	@Autowired
	private VotesRepository votesRepository;
	
	public boolean hasUserVoted(User user, Integer productId) {
		List<Votes> userVotes = this.votesRepository.findByUserAndProductId(user, productId);
		if(userVotes != null && userVotes.size()>0) {
			return true;
		}
		else {
			return false;
		}
	}
	public void insertVote(Votes vote) {
		this.votesRepository.save(vote);
	}

	public void deleteVotes(User user) {
		this.votesRepository.deleteByUser(user);
	}
	public void deleteVotes(Integer productId) {
		this.votesRepository.deleteByProductId(productId);
	}
}
