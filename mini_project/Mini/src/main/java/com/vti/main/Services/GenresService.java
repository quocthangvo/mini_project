package com.vti.main.Services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.vti.main.DataNotFoundException.DataNotFoundException;
import com.vti.main.Models.Genres;
import com.vti.main.Repositories.IGenresRepository;

@Service
public class GenresService implements IGenresService {
	@Autowired
	private IGenresRepository repository;

	public List<Genres> getAllGenreses() {
		return repository.findAll();
	}

	@Override
	public Genres getGenresById(int id) throws DataNotFoundException {
		return repository.findById(id).orElseThrow(() -> new DataNotFoundException("Not found"));
	}

	@Override
	public void deleteGenresById(int id) {
		repository.deleteById(id);
	}

	@Override
	public void createGenres(Genres genres) {
		repository.save(genres);
	}
}