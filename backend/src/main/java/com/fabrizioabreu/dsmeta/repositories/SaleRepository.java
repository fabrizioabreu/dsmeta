package com.fabrizioabreu.dsmeta.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.fabrizioabreu.dsmeta.entities.Sale;

public interface SaleRepository extends JpaRepository<Sale, Long> {

}
