// Import the React library
import React from "react";
import { useEffect, useState } from "react";
import '../App.css';
import {useParams} from 'react-router-dom';


// Define a new React component
const singlePlayer = () => {
  const [singlePlayer, setSinglePlayer] = useState(null);
  const [error, setError] = useState(null);
  let { id } = useParams();

  
  useEffect(() => {
    async function fetchSinglePlayer() {
        try {
          const response = await fetch(`https://fsa-puppy-bowl.herokuapp.com/api/2405-ftb-et-web-pt/players/${id}`

          );
          const result = await response.json();
          console.log(result);
          setSinglePlayer(result.data.player);
        } catch (error) {
          console.error(error);
        }
      }
      fetchSinglePlayer();
  }, []);


  // Show the fetched data after it has arrived
  return (
    <div className="singlePlayer">
      
          {/* {player.imageUrl} alt="player.name" */}
          
          <div className="player-details">
            <h2> {singlePlayer?.name} </h2> 
            <p>  {singlePlayer?.breed} </p> 
            <p> {singlePlayer?.status} </p>
          </div>
    </div>
  );
};

// Export the component so it can be imported and used in other files
export default singlePlayer;
