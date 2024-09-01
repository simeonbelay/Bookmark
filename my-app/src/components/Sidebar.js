import React from "react";

function Sidebar({ topAnime }) {
    return (
        <aside>
            <nav>
                <h3>Top Anime</h3>
                {topAnime && topAnime.length > 0 ? (
                    topAnime.map((anime) => (
                        <a
                            key={anime.mal_id}
                            href={anime.url}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            {anime.title}
                        </a>
                    ))
                ) : (
                    <p>Loading top anime...</p>
                )}
            </nav>
        </aside>
    );
}

export default Sidebar;
