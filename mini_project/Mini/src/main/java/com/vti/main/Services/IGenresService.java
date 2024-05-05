package com.vti.main.Services;

import java.util.List;

import com.vti.main.DataNotFoundException.DataNotFoundException;
import com.vti.main.Models.Genres;

public interface IGenresService {
	List<Genres> getAllGenreses();

	Genres getGenresById(int id) throws DataNotFoundException;

	void deleteGenresById(int id);

	void createGenres(Genres genres);
}
