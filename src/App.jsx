// En App.jsx
import { getDay } from "./constants/getDay";
import { Header } from "./components/Header";
import { SearchPage } from "./components/SearchPage";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./components/HomePage";
import recommendedAnimes from "./mocks/recommended.json";
import { getAnime } from "./services/getAnime";
import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [today, yesterday] = getDay();
  const [dayliAnimes, setDayliAnimes] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const API_URL_TODAY = `https://api.jikan.moe/v4/schedules?filter=${today}`;
      const API_URL_YESTERDAY = `https://api.jikan.moe/v4/schedules?filter=${yesterday}`;

      const [dayliAnimesToday, dayliAnimesYesterday] = await Promise.all([
        getAnime(API_URL_TODAY),
        getAnime(API_URL_YESTERDAY),
      ]);

      const combinedAnimes = [
        ...dayliAnimesToday.data,
        ...dayliAnimesYesterday.data,
      ];

      setDayliAnimes(combinedAnimes);
    };

    fetchData();
  }, [today, yesterday]);

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
              recommendedAnimes={recommendedAnimes.data}
            />
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
