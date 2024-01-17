import React from "react";
import Weather from "./Weather";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="Ulundi" />
        <footer>
        This project was coded by { " " }
        <a
          href="https://github.com/uNoxKhoza/"
          target="_blank"
          rel="noreferrer"
        >
          uNoxKhoza
        </a>{ " " }
        and open sourced on { " " }
        <a
          href="https://github.com/uNoxKhoza/react-weather-app"
          target="_blank"
          rel="noreferrer"
        >
          Github
        </a>    
        </footer>
      </div>
    </div>
  );
}
