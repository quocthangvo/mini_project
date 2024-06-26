package com.vti.main.Services;

import java.util.List;

import com.vti.main.DataNotFoundException.DataNotFoundException;
import com.vti.main.Models.Book;

import DTO.BookDTO;

public interface IBookService {
	List<Book> getAllBooks();

	Book getBookById(int id) throws DataNotFoundException;

	void deleteBookById(int id);

	Book createBook(BookDTO bookDTO) throws Exception;

}
