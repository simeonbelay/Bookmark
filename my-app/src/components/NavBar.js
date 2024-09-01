import React from "react"

function NavBar() {
    return(
        <div className = "NavBar">
        <a href = "/" className = "NavItem">
          Home
        </a>
        <a href = "/Anime" className = "NavItem">
            Anime
        </a>
        <a href = "/Favorites" className = "NavItem">
            Favorites
        </a>
        <input type="text" id="SearchBar" placeholder="Search for an Anime..."></input>
      </div>
    )
}

export default NavBar