// En App.jsx
import { Header } from "./components/Header";
import { SearchPage } from "./components/SearchPage";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./components/HomePage";
import { useState } from "react";
import "./App.css";

function App() {
  const [menuState, setMenuState] = useState("no-active");

  return (
    <Router>
      <Header menuState={menuState} setMenuState={setMenuState} />
      {menuState === "no-active" && (
        <Routes>
          <Route path="/search" element={<SearchPage />} />
          <Route path="/" element={<HomePage />} />
        </Routes>
      )}
    </Router>
  );
}

export default App;
