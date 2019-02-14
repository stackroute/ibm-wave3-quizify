package com.stackroute.seachService.service;

import com.stackroute.seachService.domain.Game;

import java.util.List;

public interface SearchService {
    public List<Game> findByGameName(String name);
    public List<Game> findByStartsWith(String alphabet);

}
