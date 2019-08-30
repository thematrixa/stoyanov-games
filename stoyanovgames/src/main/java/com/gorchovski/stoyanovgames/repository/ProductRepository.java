package com.gorchovski.stoyanovgames.repository;

import java.util.Date;
import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.gorchovski.stoyanovgames.model.Image;
import com.gorchovski.stoyanovgames.model.Product;
import com.gorchovski.stoyanovgames.model.enums.ImagePlacementEnum;

@Repository
public interface ProductRepository extends JpaRepository<Product, Long>  {
	Product findById(Integer productId);
	List<Product> findByIsActiveAndIsDeleted(Boolean isActive, Boolean isDeleted);
	List<Product> findByIsDeleted(Boolean isDeleted);
	@Query(value = "SELECT o FROM Product o WHERE o.onSalePercent > 0 and o.isActive=1 and o.isDeleted=0")
    List<Product> getOnSaleProducts();
	@Query(value = "SELECT o FROM Product o WHERE o.dateAdded > :creationDateTime and o.isActive=1 and o.isDeleted=0")
	List<Product> getNewProducts(@Param("creationDateTime") Date creationDateTime);
}
