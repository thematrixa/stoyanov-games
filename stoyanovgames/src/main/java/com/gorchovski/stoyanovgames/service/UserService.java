package com.gorchovski.stoyanovgames.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.gorchovski.stoyanovgames.model.User;
import com.gorchovski.stoyanovgames.repository.UserRepository;

@Service
public class UserService {

    //@Value(/*ANY NAME GOES HERE FROM APP PROPERTIES"${fb.keystore.etlog.name}"*/)
    //private String eTlogKeystoreName;
	@Autowired
    private UserRepository userRepository;
 
    public List<User> list() {
        return userRepository.findAll();
    }

	public void batchInsertUpdate(List<User> list) {
		this.userRepository.saveAll(list);
	}

	public void truncate() {
		this.userRepository.deleteAll();
	}

}
