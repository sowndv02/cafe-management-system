package com.inn.cafe.wrapper;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@NoArgsConstructor
@AllArgsConstructor
@Data
public class ProductWrapper {
	Integer id;
	String name;
	String description;
	Integer price;
	String status;
	Integer categoryId;
	String categoryName;
	
	
}
