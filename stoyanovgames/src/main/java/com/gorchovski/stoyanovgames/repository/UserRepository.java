package com.gorchovski.stoyanovgames.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.gorchovski.stoyanovgames.model.User;

@Repository
public interface UserRepository extends JpaRepository<User, Long> {

}
