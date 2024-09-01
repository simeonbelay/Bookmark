import "./styles.css";
//import App from "./App";
import { useState, useEffect } from 'react';

export default function App() {

    const [animeList, SetAnimeList] = useState([]);
    const [topAnime, SetTopAnime] = useState([]);
    const [search, SetSearch] = useState("");
    
    const GetTopAnime = async () => {
      const temp = await fetch(`https://api.jikan.moe/v3/top/anime/1/bypopularity`)
        .then(res => res.json());
  
      SetTopAnime(temp.top.slice(0, 5));
    }

   
  
  
  
  
  
  
  
  
  return (
    <div class ="App">
      {/** HEADING  **/}
      <h1 id = "header">Anime Bookmarking System - MAL Extension</h1>
      <div class = "title">
      <h2 class = "Subheader">Where all your anime dreams come true!</h2>
        <a href = "/Login/Registration" class = "login">
          Login/Registration
        </a>
      </div>
      
     


      {/** NAVBAR  **/}
      <div class = "NavBar">
        <a href = "/Home" class = "NavItem">
          Home
        </a>
        <a href = "/Anime" class = "NavItem">
            Anime
        </a>
        <a href = "/Favorites" class = "NavItem">
            Favorites
        </a>
        <input type="text" id="SearchBar" placeholder="Search..."></input>
      </div>



      {/** CONTENT **/}














    </div>


  );
}
