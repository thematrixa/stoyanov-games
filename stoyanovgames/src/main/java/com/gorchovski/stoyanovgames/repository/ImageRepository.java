package com.gorchovski.stoyanovgames.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.gorchovski.stoyanovgames.model.Image;
import com.gorchovski.stoyanovgames.model.enums.ImagePlacementEnum;

public interface ImageRepository  extends JpaRepository<Image, Long>   {

	@Query(value = "SELECT o FROM Image o WHERE o.imagePlacement = :imagePlacement")
	Image getImageByPlacement(@Param("imagePlacement") ImagePlacementEnum imagePlacement);
}
