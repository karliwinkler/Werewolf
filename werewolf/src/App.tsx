import SelectionPage from "./components/SelectionPage.tsx";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import GamePage from "./components/GamePage.tsx";
import TitlePage from "./components/TitlePage.tsx";
import CardPage from "./components/CardPage.tsx";
import InstructionPage from "./components/InstructionPage.tsx";


function App() {

  return (
      <Router>
        <Routes>
          <Route
              path="/"
              element={<TitlePage />}
          />
          <Route path="/game" element={<GamePage />} />
            <Route path="/selection" element={<SelectionPage />} />
            <Route path="/cards" element={<CardPage />} />
            <Route path="/instructions" element={<InstructionPage />} />
            <Route path="/title" element={<TitlePage />} />
        </Routes>
      </Router>
  );
}

export default App
