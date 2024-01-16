import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Home";
import Topics from "./pages/bac-topics";
import Print from "./pages/print-topics";
import { MantineProvider } from "@mantine/core";

const App = () => {
  return (
    <MantineProvider>
      <Router>
        
        <Routes>
        <Route path="/" element={<Home />} index />
          <Route path="/bac-topics" element={<Topics />} />
          <Route path="/print-topics" element={<Print />} />
        </Routes>
      </Router>
    </MantineProvider>
  );
};

export default App;
