package com.gorchovski.stoyanovgames.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.gorchovski.stoyanovgames.model.Address;

@Repository
public interface AddressRepository extends JpaRepository<Address, Long>  {
	Address findByName(String name);
}
