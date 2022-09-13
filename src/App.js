import axios from "axios";
import React, { useEffect, useState } from "react";
import "./index.css";

const App = () => {
  const [article, setArticle] = useState([]);
  const [flag, setFlag] = useState("");

  const API = "https://rickandmortyapi.com/api/character";

  useEffect(() => {
    axios.get(API).then((data) => {
      setArticle(data.data.results);
      // console.log(data);
    });
  }, []);

  const getStatus = () => {
    setFlag("status");
  };
  const getSpecies = () => {
    setFlag("species");
  };
  const getUrl = () => {
    setFlag("url");
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

        <tbody>
          {article.map((item) => {
            return (
              <tr key={item.id}>
                <td>{item.gender}</td>
                <td>{item.name}</td>
                {(() => {
                  switch (flag) {
                    case "status":
                      return <td>{item.status}</td>;

                    case "species":
                      return <td>{item.species}</td>;

                    case "url":
                      return <td>{item.url}</td>;
                    default:
                      return <td></td>;
                  }
                })()}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default App;
