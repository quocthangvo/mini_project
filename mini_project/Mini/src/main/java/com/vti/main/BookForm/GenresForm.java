package com.vti.main.BookForm;

import com.vti.main.Models.Genres;

public class GenresForm {
	private String name;
	private String description;

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}

	public Genres toEntity() {
		Genres genres = new Genres();
		genres.setName(this.name);
		genres.setDescription(this.description);
		return genres;
	}
}
