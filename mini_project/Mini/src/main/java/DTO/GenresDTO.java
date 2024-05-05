package DTO;

import java.util.List;

import lombok.Data;
import lombok.NoArgsConstructor;

public class GenresDTO {

	private String name;

	private String description;

	private List<BookDTO> book;

	@Data
	@NoArgsConstructor
	static class BookDTO {

		private String name;
		private String price;

	}

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

	public List<BookDTO> getBook() {
		return book;
	}

	public void setBook(List<BookDTO> book) {
		this.book = book;
	}

	public GenresDTO() {

	}

	public GenresDTO(String name, String type, String description, List<BookDTO> book) {
		super();
		this.name = name;
		this.description = description;
		this.book = book;
	}

}
