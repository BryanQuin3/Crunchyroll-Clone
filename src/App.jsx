// En App.jsx
import { getDay } from "./constants/getDay";
import { Header } from "./components/Header";
import { SearchPage } from "./components/SearchPage";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./components/HomePage";
import recommendedAnimes from "./mocks/recommended.json";
import { getAnime } from "./services/getAnime";
import "./App.css";

function App() {
  const [today, yesterday] = getDay();
  const dayliAnimes = [];

  const fetchDataToday = async () => {
    const API_URL_TODAY = `https://api.jikan.moe/v4/schedules?filter=${today}`;
    const dayliAnimesToday = await getAnime(API_URL_TODAY);
    if (dayliAnimesToday) {
      dayliAnimes.push(...dayliAnimesToday);
    }
  };

  const fetchDataYesterday = async () => {
    const API_URL_YESTERDAY = `https://api.jikan.moe/v4/schedules?filter=${yesterday}`;
    const dayliAnimesYesterday = await getAnime(API_URL_YESTERDAY);
    if (dayliAnimesYesterday) {
      dayliAnimes.push(...dayliAnimesYesterday);
    }
  };

  setTimeout(fetchDataToday, 1000);
  setTimeout(fetchDataYesterday, 3000);

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
