package com.vti.main.Repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.vti.main.Models.Genres;

public interface IGenresRepository extends JpaRepository<Genres, Integer> {

}
