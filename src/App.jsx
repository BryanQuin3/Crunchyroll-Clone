// En App.jsx
import { Header } from "./components/Header";
import { SearchPage } from "./pages/SearchPage";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import { useState } from "react";
import "./App.css";
import AnimePage from "./pages/AnimePage";
import { PageNotFound } from "./pages/PageNotFound";
import GenresPage from "./pages/GenresPage";
import { FavoritesPage } from "./pages/FavoritesPage";
import { HistoryPage } from "./pages/HistoryPage";
import { CrunchyListsPage } from "./pages/CrunchyListsPage";

function App() {
  const [menuState, setMenuState] = useState("no-active");

  return (
    <Router>
      <Header menuState={menuState} setMenuState={setMenuState} />
      <div className={menuState === "no-active" ? "" : "hidden"}>
        <Routes>
          <Route path="/search" element={<SearchPage />} />
          <Route path="/anime/:idAnime" element={<AnimePage />} />
          <Route path="/genres" element={<GenresPage />} />
          <Route path="/favorites" element={<FavoritesPage />} />
          <Route path="/crunchylists" element={<CrunchyListsPage />} />
          <Route path="/history" element={<HistoryPage />} />
          <Route path="/" element={<HomePage />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
