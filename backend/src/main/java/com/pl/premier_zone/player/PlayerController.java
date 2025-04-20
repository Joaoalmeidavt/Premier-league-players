package com.pl.premier_zone.player;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController //  marks the class as a spring MVC controller where every method returns a domain object instead of a view
@RequestMapping(path = "api/v1/player")
@CrossOrigin(origins = {"http://localhost:3000", "http://localhost:5173", "https://premierzone.vercel.app"})
public class PlayerController {
    private final PlayerService playerService;

    @Autowired // allows the controller to delegate the businesss logic back to the controller
    public PlayerController(PlayerService playerService){
        this.playerService = playerService;
    }

    @GetMapping // to handle all the request
    public List<Player> getPlayers(
            @RequestParam(required = false) String team,
            @RequestParam(required = false) String name,
            @RequestParam(required = false) String position,
            @RequestParam(required = false) String nation){
        // method is going to return a different player list based on the presence of these query parameters
        // if not param are provided will return all the players
           // If nation is not null, handle its case and ensure it's not null
    if (nation != null) {
        nation = nation.toLowerCase();  // Convert to lowercase here
    }
    
        if(team != null && position != null){
            return  playerService.getPlayersByTeamAndPosition(team, position);
        }
        else if (team != null){
            return playerService.getPlayersFromTeam(team);
        } else if (name != null) {
            return playerService.getPlayersByName(name);
        } else if (position != null) {
            return playerService.getPlayersByPos(position);
        } else if (nation != null) {
            return playerService.getPlayersByNation(nation);
        } else {
            return playerService.getPlayers();
        }
    }
    @PostMapping // this handles HTTP post requests to add a new player to our database
    public ResponseEntity<Player> addPlayer(@RequestBody Player player){
        Player createdPlayer = playerService.addPlayer(player);
        return new ResponseEntity<>(createdPlayer, HttpStatus.CREATED); // gets the http status of 201 successful
    }

    @PutMapping // handles http pull request to update an existing player in the db
    public ResponseEntity<Player> updatePlayer(@RequestBody Player player){
        Player resultPlayer = playerService.updatePlayer(player);
        if (resultPlayer != null ) {
            return new ResponseEntity<>(resultPlayer, HttpStatus.OK);
        }
        else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    @DeleteMapping("/{playerName}")
    public ResponseEntity<String> deletePlayer(@PathVariable String playerName){ // this pathVariable is {playerName}
        playerService.deletePlayer(playerName);
        return new ResponseEntity<>("Player deleted successfully", HttpStatus.OK);
    }

}
