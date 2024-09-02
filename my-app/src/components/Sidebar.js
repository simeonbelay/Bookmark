import React from "react";

function Sidebar({ topAnime }) {
    return (
        <aside>
            <nav>
                <h3 id="topAnime">Top Anime</h3>
                {topAnime && topAnime.length > 0 ? (
                    topAnime.map((anime) => (
                        <a
                            className="topAnime"
                            key={anime.mal_id}
                            href={anime.url}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <img
                                src={anime.images.jpg.image_url}  /* Correctly reference the image URL */
                                alt={anime.title}  /* Add alt text for accessibility */
                            />
                            {anime.title}
                        </a>
                    ))
                ) : (
                    <p id="topAnime2">Loading anime...</p>
                )}
            </nav>
        </aside>
    );
}

export default Sidebar;
