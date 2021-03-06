package com.stackroute.quizify.userregistrationservice.repository;

import com.stackroute.quizify.userregistrationservice.domain.User;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface UserRepository extends MongoRepository<User,Long> {

    Optional<User> findTopByOrderByIdDesc();

    User findById(long id);
    User findByName(String name);

    boolean existsById(long id);
    boolean existsByName(String name);
}

