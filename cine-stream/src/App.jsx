import React, { useState, useEffect } from 'react'
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home"
import Favorites from "./pages/Favorites"
const App = () => {

  const [favorites, setFavorites] = useState([]);

  useEffect(() => {

    const savedFavorites = localStorage.getItem("favorites");

    if (!savedFavorites) return;

    setFavorites(JSON.parse(savedFavorites));

  }, []);

  useEffect(() => {

    localStorage.setItem(
      "favorites",
      JSON.stringify(favorites)
    );

  }, [favorites]);

  return (
    <Routes>
      <Route
        path="/"
        element={<Home
          favorites={favorites}
          setFavorites={setFavorites} />}
      />

      <Route
        path="/favorites"
        element={
          <Favorites
            favorites={favorites}
            setFavorites={setFavorites}
          />
        }
      />
    </Routes>
  )
}

export default App