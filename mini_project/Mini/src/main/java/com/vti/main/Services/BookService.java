package com.vti.main.Services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.vti.main.DataNotFoundException.DataNotFoundException;
import com.vti.main.Models.Book;
import com.vti.main.Models.Genres;
import com.vti.main.Repositories.IBookRepository;
import com.vti.main.Repositories.IGenresRepository;

import DTO.BookDTO;

@Service
public class BookService implements IBookService {
	@Autowired
	private IBookRepository repository;

	@Autowired
	private IGenresRepository genresRepository;

	public List<Book> getAllBooks() {
		return repository.findAll();
	}

	@Override
	public Book getBookById(int id) throws DataNotFoundException {
		return repository.findById(id).orElseThrow(() -> new DataNotFoundException("Not found"));
	}

	@Override
	public void deleteBookById(int id) {
		repository.deleteById(id);
	}

	@Override
	public Book createBook(BookDTO bookDTO) throws Exception {
		Genres genres = genresRepository.findById(bookDTO.getGenre_id())
				.orElseThrow(() -> new Exception("Danh muc khong ton tai"));
		// bắt lỗi
		Book book = new Book();
		book.setName(bookDTO.getName());
		book.setPrice(bookDTO.getPrice());
		book.setDescription(bookDTO.getDescription());
		book.setGenres(genres);

		return repository.save(book);
	}

}
