import Button from '@restart/ui/esm/Button'
import React from 'react'

function JokesSetup({setup, delivery, getAnotherJoke}) {



    return (
        <div className="container">
            <h1 className="text-success text-center">Jokes from Jokes API</h1>
            <p>
                <span className="d-block p-2 bg-primary text-white">{setup}</span>
            </p>
            <p>
                <span className="d-block p-2 bg-warning text-white">{delivery}</span>
            </p>

            <button onClick={getAnotherJoke} className="btn btn-success btn-lg">Next Joke..</button>
        </div>
    )
}

export default JokesSetup
 