package com.gorchovski.stoyanovgames.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.gorchovski.stoyanovgames.model.Votes;
import com.gorchovski.stoyanovgames.repository.VotesRepository;

@Transactional
@Service
public class VotesService {

	@Autowired
	private VotesRepository votesRepository;
	
	public boolean hasUserVoted(String username, Integer productId) {
		List<Votes> userVotes = this.votesRepository.findByUsernameAndProductId(username, productId);
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
}
