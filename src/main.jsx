import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { FavoritesProvider } from "./components/context/favorites.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <FavoritesProvider>
    <App />
  </FavoritesProvider>
);
