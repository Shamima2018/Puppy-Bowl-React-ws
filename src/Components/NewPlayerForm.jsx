import { useState } from "react";


export default function newPlayerForm() {
const [name, setName] = useState("");
const [breed, setBreed] = useState("");
const [error, setError] = useState(null);


    async function handleSubmit(event) {
        event.preventDefault();
        console.log("New player name");
        console.log(breed);

        try {
            const response = await fetch('https://fsa-puppy-bowl.herokuapp.com/api/2405-ftb-et-web-pt/players/', {
                    method: "POST",
                    headers: {
                        'Content-Type': 'application/json',
                      },
                    body: JSON.stringify({name, breed}),
            });
            const result = await response.json();
            //setToken(result.token);

        } catch (error) {
            setError(error.message);
            console.error(error);
        }
        
    }

    return (
        <div>
            <h2>Add new player</h2>
            {error && <p>{error}</p>}

            <form onSubmit={handleSubmit}>
                <label>
                    Name: <input value={name} onChange={(e) => setName(e.target.value)} />
                </label>
                <label>
                    Breed: <input value={breed} onChange={(e) => setBreed(e.target.value)} />
                </label>
                <button> Submit</button>
            </form>
        </div>
    )
}

