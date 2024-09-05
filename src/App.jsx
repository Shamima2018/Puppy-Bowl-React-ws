// Import the React library, which allows us to define components
import { Component } from "react";
import { Provider } from "react-redux";
import { Routes, Route, Link } from 'react-router-dom';


// Import the Players component, which we'll use to show a list of players
import AllPlayers from './Components/AllPlayers.jsx'
import SinglePlayer from './Components/SinglePlayer.jsx'
import NewPlayerForm from './Components/NewPlayerForm.jsx'



// Define the App component
function App() {
  // This component renders the Players component inside a div
  return (

    <main>
      <div>
        <Link to='/'>Home</Link>
      </div>
      <h1>Puppy Bowl React</h1>
      <Routes>
        <Route path='/' element={<AllPlayers />} />
        <Route path='/players/:id' element={<SinglePlayer />} />
        <Route path='/addPlayer' element={<NewPlayerForm />} />

        
      </Routes>
    </main>

  );
}

// Export the App component as the default export
export default App;
