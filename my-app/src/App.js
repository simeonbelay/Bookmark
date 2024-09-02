import "./styling/styles.css";
import "./styling/sidebar.css";
//import App from "./App";
import React, { useState, useEffect } from 'react';
import NavBar from './components/NavBar'
import Sidebar from './components/Sidebar'

export default function App() {

    const [animeList, SetAnimeList] = useState([]);
    const [topAnime, SetTopAnime] = useState([]);
    const [search, SetSearch] = useState("");
    
    const GetTopAnime = async () => {
      //try {
        const response = await fetch(`https://api.jikan.moe/v4/top/anime`);
        const temp = await response.json();
    
        console.log('Fetched data:', temp);
      
       // if (temp.data && Array.isArray(temp.data)) {
          //console.log('about to slice');
          SetTopAnime(temp.data.slice(0, 3));
          //console.log('sliced');
        //} else {
         // console.error('Unexpected response structure:', temp);
        //}
      //} catch (error) {
       // console.error('Error fetching top anime:', error);
      //}
    }
    
    
    

    useEffect(() =>{
      GetTopAnime();
      console.log("START OF TEH LOG")
      
    }, []);
      console.log(topAnime);

  
  
  
  
  
  
  
  return (


    <div className ="App">
      {/** HEADING  **/}
      <h1 id = "header">Anime Bookmarking System - MAL Extension</h1>
      <div className = "title">
      <h2 className = "Subheader">Where all your anime dreams come true!</h2>
        <a href = "/Login/Registration" className = "login">
          Login/Registration
        </a>
      </div>
      
     


      {/** NAVBAR  **/}
      <NavBar />
      <Sidebar topAnime = {topAnime} />
   

      



      {/** CONTENT **/}
      













    </div>


  );
}
