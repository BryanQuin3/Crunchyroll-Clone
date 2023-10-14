// En App.jsx
import { Header } from "./components/Header";
import { SearchPage } from "./components/SearchPage";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./components/HomePage";
import { useState } from "react";
import "./App.css";
import AnimePage from "./components/AnimePage";

function App() {
  const [menuState, setMenuState] = useState("no-active");

  return (
    <Router>
      <Header menuState={menuState} setMenuState={setMenuState} />
      <div className={menuState === "no-active" ? "" : "hidden"}>
        <Routes>
          <Route path="/search" element={<SearchPage />} />
          <Route path="/anime/:idAnime" element={<AnimePage />} />
          <Route path="/anime" element={<p>Page not found</p>} />
          <Route path="/" element={<HomePage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
