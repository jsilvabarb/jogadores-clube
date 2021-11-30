/* eslint-disable import/no-anonymous-default-export */
import React, { useEffect, useState } from "react";
import "./App.css";
import Jogadoresdb from "./Jogadoresdb";
import ListaClubes from "./components/ListaClubes";

export default () => {
  
  const [ listaClubes, setListaClubes] = useState([{}]);
  useEffect(() => {
   Jogadoresdb.makeRequest("http://localhost:3001/clubes", "GET").then(function(response) {
    response.json().then(function(Clubes) {
      console.log(Clubes);
      setListaClubes(Clubes);
    })
   });    
  }, [])
  return (
    <div className="page">
      <nav className="menu">
        <h1>GOCLUBE</h1>
      </nav>

      <section className="clubes">
      {listaClubes.map((clubes)=> (
        <ListaClubes clubes={clubes}/>
      ))}
      </section>

    </div>
  )
  
}
