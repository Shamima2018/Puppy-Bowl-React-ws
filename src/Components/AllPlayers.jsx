// Import the React library
import React from "react";
import { useEffect, useState } from "react";
import {Link} from 'react-router-dom';

// Import the CSS styles for this component
import '../App.css';

// Define a new React component
const allPlayers = () => {
  const [players, setPlayers] = useState(null);
  const [error, setError] = useState(null);

  
  useEffect(() => {
    async function fetchPlayers() {
        try {
          const response = await fetch(
            "https://fsa-puppy-bowl.herokuapp.com/api/2405-ftb-et-web-pt/players"
          );
          const result = await response.json();
          console.log(result);
          setPlayers(result.data.players);
        } catch (error) {
          console.error(error);
        }
      }
      fetchPlayers();
    }, []);


  // Show the fetched data after it has arrived
  return (
    <div className="players">
      
      {
      players?.map((player) => (
        // Use the player's ID as the key for this div
        <div key={player.id} className="player-card">
          
          <div className="player-details">
          <Link to= {`/players/${player.id}`}>{player.name}</Link>
            <p>  {player.breed} </p> 
            <p> {player.status} </p>
            <img src={player.imageUrl} alt="player.name"/>

          </div>
        </div>
      ))}

    </div>
  );
};

// Export the component so it can be imported and used in other files
export default allPlayers;
