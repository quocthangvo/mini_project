package com.vti.main.Repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.vti.main.Models.Book;

public interface IBookRepository extends JpaRepository<Book, Integer> {

}
