// En App.jsx
import { Header } from "./components/Header";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useState } from "react";
import "./App.css";
import { lazy, Suspense } from "react";

const LazySearchPage = lazy(() => import("./pages/SearchPage"));
const LazyHomePage = lazy(() => import("./pages/HomePage"));
const LazyAnimePage = lazy(() => import("./pages/AnimePage"));
const LazyPageNotFound = lazy(() => import("./pages/PageNotFound"));
const LazyGenresPage = lazy(() => import("./pages/GenresPage"));
const LazyFavoritesPage = lazy(() => import("./pages/FavoritesPage"));
const LazyHistoryPage = lazy(() => import("./pages/HistoryPage"));
const LazyCrunchyListsPage = lazy(() => import("./pages/CrunchyListsPage"));

function App() {
  const [menuState, setMenuState] = useState("no-active");

  return (
    <Suspense fallback={null}>
      <Router>
        <Header menuState={menuState} setMenuState={setMenuState} />
        <div className={menuState === "no-active" ? "" : "hidden"}>
          <Routes>
            <Route path="/search" element={<LazySearchPage />} />
            <Route path="/anime/:idAnime" element={<LazyAnimePage />} />
            <Route path="/genres" element={<LazyGenresPage />} />
            <Route path="/favorites" element={<LazyFavoritesPage />} />
            <Route path="/crunchylists" element={<LazyCrunchyListsPage />} />
            <Route path="/history" element={<LazyHistoryPage />} />
            <Route path="/" element={<LazyHomePage />} />
            <Route path="*" element={<LazyPageNotFound />} />
          </Routes>
        </div>
      </Router>
    </Suspense>
  );
}

export default App;
