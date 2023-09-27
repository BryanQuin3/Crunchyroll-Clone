// En App.jsx
import { getDay } from "./constants/getDay";
import { Header } from "./components/Header";
import { SearchPage } from "./components/SearchPage";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./components/HomePage";
import { useAnimeData } from "./hooks/useAnimeData";
import "./App.css";

function App() {
  const [today, yesterday] = getDay();
  const API_URL = `https://api.jikan.moe/v4/schedules?filter=${today},${yesterday}`;
  const dayliAnimes = useAnimeData(API_URL);
  const API_URL_TOP = `https://api.jikan.moe/v4/top/anime`;
  const recommendedAnimes = useAnimeData(API_URL_TOP);

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
