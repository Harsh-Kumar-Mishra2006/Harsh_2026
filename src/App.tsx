// src/App.tsx
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import { ThemeProvider } from "./context/themeContext";
import Home from "./pages/Home";
const App: React.FC = () => {
  return (
    <ThemeProvider>
      <Router>
        <div className="App">
          <AnimatePresence mode="wait">
            <Routes>
              {/* Home Route */}
              <Route path="/" element={<Home />} />
            </Routes>
          </AnimatePresence>
        </div>
      </Router>
    </ThemeProvider>
  );
};

export default App;
