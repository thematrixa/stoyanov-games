package com.gorchovski.stoyanovgames.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.transaction.annotation.Transactional;

import com.gorchovski.stoyanovgames.model.Image;
import com.gorchovski.stoyanovgames.model.enums.ImagePlacementEnum;

public interface ImageRepository  extends JpaRepository<Image, Long>   {

	@Query(value = "SELECT o FROM Image o WHERE o.imagePlacement = :imagePlacement")
	Image getImageByPlacement(@Param("imagePlacement") ImagePlacementEnum imagePlacement);
	@Modifying
	@Transactional
	@Query(value = "SET GLOBAL max_allowed_packet = :value", nativeQuery = true)
	void changePacketMaxSize(@Param("value") Integer value);
}
