package com.vti.main.Controllers;

import java.util.ArrayList;
import java.util.List;

import lombok.RequiredArgsConstructor;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.vti.main.DataNotFoundException.DataNotFoundException;
import com.vti.main.Models.Book;
import com.vti.main.Services.IBookService;

import DTO.BookDTO;

@RestController
@CrossOrigin("http://localhost:3000")
@RequestMapping(value = "api/v1/books")
@RequiredArgsConstructor
public class BookController {
	@Autowired
	private IBookService service;

	@Autowired
	private ModelMapper modelMapper;

	@GetMapping()
	public List<BookDTO> getAllBooks() {
		List<Book> entities = service.getAllBooks();
		List<BookDTO> dtos = new ArrayList<>();

		for (Book entity : entities) {
			String genreName = "";
			int genreId = 0;

			if (entity.getGenres() != null) {
				genreName = entity.getGenres().getName();
				genreId = entity.getGenres().getId();
			}

			BookDTO dto = new BookDTO(entity.getName(), entity.getPrice(), entity.getDescription(), genreName, genreId);
			dtos.add(dto);
		}

//		List<Book> entities = service.getAllBooks();
//
//		List<BookDTO> dtos = modelMapper.map(entities, new TypeToken<List<BookDTO>>() {
//		}.getType());
		return dtos;
	}

	@GetMapping(value = "/{book_id}")
	public ResponseEntity<?> getBookById(@PathVariable(name = "book_id") int id) {
		try {
			Book entity = service.getBookById(id);
			String genreName = "";
			int genreId = 0;
			if (entity.getGenres() != null) {
				genreName = entity.getGenres().getName();
				genreId = entity.getGenres().getId();
			}
			BookDTO dto = new BookDTO(entity.getName(), entity.getPrice(), entity.getDescription(), genreName, genreId);
			return ResponseEntity.ok(dto);
		} catch (DataNotFoundException e) {
			return ResponseEntity.badRequest().body(e.getMessage());
		}
	}

	@PostMapping()
	public ResponseEntity<?> createBook(@RequestBody BookDTO bookDTO) {

		try {
			Book book = service.createBook(bookDTO);
			return ResponseEntity.ok(book);

		} catch (Exception e) {
			return ResponseEntity.badRequest().body(e.getMessage());
		}
	}

	@DeleteMapping(value = "/delete/{book_id}")
	public ResponseEntity<String> deleteBookById(@PathVariable(name = "book_id") int id) {
		try {
			service.deleteBookById(id);
			return ResponseEntity.ok("Book deleted successfully");
		} catch (Exception e) {
			return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Failed to delete book");
		}
	}

}
