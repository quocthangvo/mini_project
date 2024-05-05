package com.vti.main.Controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.vti.main.BookForm.GenresForm;
import com.vti.main.DataNotFoundException.DataNotFoundException;
import com.vti.main.Models.Genres;
import com.vti.main.Services.IGenresService;

@RestController
@CrossOrigin("http://localhost:3000")
@RequestMapping(value = "api/v1/genres")
public class GenresController {
	@Autowired
	private IGenresService service;

	@GetMapping()
	public List<Genres> getAllGenreses() {
		return service.getAllGenreses();

	}

	@GetMapping(value = "/{genres_id}")
	public ResponseEntity<?> getGenresById(@PathVariable(name = "genres_id") int id) {
		try {
			return ResponseEntity.ok(service.getGenresById(id));
		} catch (DataNotFoundException e) {
			return ResponseEntity.badRequest().body(e.getMessage());
		}
	}

	@PostMapping()
	public ResponseEntity createGenres(@RequestBody GenresForm form) {
		Genres genres = form.toEntity(); // Chuyển đổi DepartmentForm thành Department
		service.createGenres(genres);
		return ResponseEntity.status(HttpStatus.CREATED).body("Genres created successfully");
	}

	@DeleteMapping(value = "/delete/{genres_id}")
	public ResponseEntity<String> deleteGenresById(@PathVariable(name = "genres_id") int id) {
		try {
			service.deleteGenresById(id);
			return ResponseEntity.ok("Book deleted successfully");
		} catch (Exception e) {
			return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Failed to delete book");
		}
	}
}
