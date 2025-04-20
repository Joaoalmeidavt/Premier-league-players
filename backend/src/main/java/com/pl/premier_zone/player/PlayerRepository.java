package com.pl.premier_zone.player;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository //this extends the jpa repository interface which provides crud operations meaning create read up update and delete for the player entity the parameters
public interface PlayerRepository extends JpaRepository<Player, String> {

    void deleteByName(String playerName);
    Optional<Player> findByName(String name); // use of optional is to handle cases where the player might not actually be found in the repository
}
