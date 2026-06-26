import React, { useState } from 'react'
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home"
import Favorites from "./pages/Favorites"
const App = () => {

  const [favorites, setFavorites] = useState([]);

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