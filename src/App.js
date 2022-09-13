import axios from "axios";
import React, { useEffect, useState } from "react";
import List from "./components/List/List";
import "./index.css";

const App = () => {
  const [article, setArticle] = useState([]);
  // const [status, setStatus] = useState("");
  // const [species, setSpecies] = useState("");
  // const [url, setUrl] = useState("");

  const API = "https://rickandmortyapi.com/api/character";

  useEffect(() => {
    axios.get(API).then((data) => {
      setArticle(data.data.results);
      // console.log(data);
    });
  }, []);

  let status = "";
  let species ="";
  let url = "";

  const getStatus = () => {
    status = article.map((item) => item.status);
    console.log(status);
  };
  const getSpecies = () => {
    species =  article.map((item) => item.species);
  };
  const getUrl = () => {
    url = article.map((item) => item.url);
  };

  

  return (
    <div>
      <button onClick={() => getStatus()}>Status</button>
      <button onClick={() => getSpecies()}>Species</button>
      <button onClick={() => getUrl()}>URL</button>

      <table>
        <thead>
          <tr>
            <th>Gender</th>
            <th>Name</th>
            <th>Dynamic</th>
          </tr>
        </thead>
        
            <tbody >
            {article.map((item) => {
          return (
              <tr key={item.id}>
                <td>{item.gender}</td>
                <td>{item.name}</td>    
                <td>{item.status}</td>
                <td>{item.species}</td>
                <td>{item.url}</td>
              </tr>
               );
              })}
            </tbody>
         
      </table>
    </div>
  );
};

export default App;
