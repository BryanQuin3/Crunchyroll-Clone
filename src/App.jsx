// En App.jsx
import { getDay } from "./constants/getDay";
import recommendedAnimesJSON from "./mocks/recommended.json";
import { Header } from "./components/Header";
import { SearchPage } from "./components/SearchPage";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./components/HomePage";
import { useAnimeData } from "./hooks/useAnimeData";
import "./App.css";

function App() {
  const day = getDay();
  const API_URL = `https://api.jikan.moe/v4/schedules?filter=${day}`;
  const dayliAnimes = useAnimeData(API_URL);
  const recommendedAnimes = recommendedAnimesJSON.data;

  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/search" element={<SearchPage />} />
        <Route
          path="/"
          element={
            <HomePage
              dayliAnimes={dayliAnimes}
              recommendedAnimes={recommendedAnimes}
            />
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
