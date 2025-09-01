import SelectionPage from "./components/SelectionPage.tsx";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import GamePage from "./components/GamePage.tsx";
import TitlePage from "./components/TitlePage.tsx";
import CardPage from "./components/CardPage.tsx";


function App() {

  return (
      <Router>
        <Routes>
          <Route
              path="/"
              element={<TitlePage />}
          />
          <Route path="/game/:numPlayers" element={<GamePage />} />
            <Route path="/selection" element={<SelectionPage />} />
            <Route path="/cards/:numPlayers" element={<CardPage />} />
        </Routes>
      </Router>
  );
}

export default App
