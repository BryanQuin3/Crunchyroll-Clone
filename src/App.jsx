// En App.jsx
import { getDay } from "./constants/getDay";
import { Header } from "./components/Header";
import { SearchPage } from "./components/SearchPage";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./components/HomePage";
import { useAnimeData } from "./hooks/useAnimeData";
import { recommendedAnimes } from "./mocks/recommended.json";
import "./App.css";

function App() {
  const [today, yesterday] = getDay();
  const API_URL_TODAY = `https://api.jikan.moe/v4/schedules?filter=${today}`;
  const dayliAnimesToday = useAnimeData(API_URL_TODAY);
  const API_URL_YESTERDAY = `https://api.jikan.moe/v4/schedules?filter=${yesterday}`;
  const dayliAnimesYesterday = useAnimeData(API_URL_YESTERDAY);
  const dayliAnimes = [...dayliAnimesToday, ...dayliAnimesYesterday];

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
