import React, { useState } from "react";
import "./Header.css";
import { Link, useNavigate } from "react-router-dom";

const Header = () => {
    const [searchQuery, setSearchQuery] = useState("");
    const navigate = useNavigate();

    const handleSearch = () => {
        if (searchQuery.trim()) {
            navigate(`/search/${searchQuery}`);
        }
    };

    return (
        <div className="header">
            <div className="headerLeft">
                <Link to="/">
                    <img
                        className="header__icon"
                        src="https://www.themoviedb.org/assets/2/v4/logos/v2/blue_short-8e7b30f73a4020692ccca9c88bafe5dcb6f8a62a4c6bc55cd9ba82bb2cd95f6c.svg"
                        alt="The Movie Database Logo"
                    />
                </Link>

                <Link to="/movies/popular" style={{ textDecoration: "none" }}><span>Popular</span></Link>
                <Link to="/movies/top_rated" style={{ textDecoration: "none" }}><span>Top Rated</span></Link>
                <Link to="/movies/upcoming" style={{ textDecoration: "none" }}><span>Upcoming</span></Link>
            </div>

            <div className="headerRight">
                <input
                    type="text"
                    placeholder="Search..."
                    className="searchBar"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                />
                <button className="searchButton" onClick={handleSearch}>
                    Search
                </button>
            </div>
        </div>
    );
};

export default Header;
