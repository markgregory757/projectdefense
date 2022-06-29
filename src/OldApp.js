import './App.css';
import { useState, useEffect } from "react";

function OldApp() {

const [ people, setPeople ] = useState(null);

const fetchData = async () => {
  const response = await fetch("mongodb+srv://Bloggers:Bloggers@cluster0.hfjai.mongodb.net/?retryWrites=true&w=majority")
    .then(response => response.json())
}

console.log("fetchData", fetchData())

console.log("people", people)

  return (
    <div className="App">
      <h1>Gun Range App</h1>
      {!people && <p>Please fetch people</p>}
      <p> Name: {people && people.name}</p>
      <ul>
        {people && people.image.map((image) => {
          <li>
            <a href={image}>{image}</a>
          </li>
        })}
      </ul>
      
    </div>
  );
}

export default OldApp;
