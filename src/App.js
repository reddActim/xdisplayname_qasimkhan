import './App.css';
import React, { useState } from 'react';

function App() {
  const [name, setName] = useState({
    first: "",
    last: ""
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const handleInput = (event) => {
    setName((prev) => ({ ...prev, [event.target.id]: event.target.value }))
  }

  const handleSubmission = (event) => {
    event.preventDefault();
    setIsSubmitted(true);
  }

  return (
    <>
      <div style={{ padding: "15px" }}>
        <h1 >Full Name Display</h1>
        <form onSubmit={(event) => handleSubmission(event)}>
          <label htmlFor="first">First Name:</label>
          <input required id='first' value={name.first} onChange={(event) => handleInput(event)}></input>
          <br />
          <label htmlFor="last">Last Name</label>
          <input required id='last' value={name.last} onChange={(event) => handleInput(event)}></input>
          <br />
          <button type='submit'>Submit</button>
        </form>
        {isSubmitted && (
          <p>Full Name: {name.first} {name.last}</p>
        )}
      </div>
    </>
  );
}

export default App;
