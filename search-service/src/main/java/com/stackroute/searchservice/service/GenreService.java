package com.stackroute.searchservice.service;

import com.stackroute.searchservice.domain.Genre;
import com.stackroute.searchservice.exception.GenreDoesNotExistsException;

import java.util.List;

/*
 * This "GenreService" Interface is used to declare all the necessary services/methods
 * which are must be implemented by the Implementing Class (GenreServiceImpl).
 */

public interface GenreService {
    List<Genre> getAllGenreByName(String topicName) throws GenreDoesNotExistsException;
    List<Genre> getAllGenreByStartsWith(String name)throws GenreDoesNotExistsException;
}