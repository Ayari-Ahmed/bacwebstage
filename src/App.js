import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Home";
import Topics from "./pages/bac-topics";
import Print from "./pages/print-topics";
import Login from "./components/Login";
import Recherche from "./components/Recherche";
import { MantineProvider } from "@mantine/core";
import Sections from "./components/Sections";
import Science from "./components/Matiere/Science";
import Mathématiques from "./components/Matiere/Mathématiques";
import Technique from "./components/Matiere/Technique";
import Economie_gestion from "./components/Matiere/Economie_gestion";
import Informatique from "./components/Matiere/Informatique";
import Lettres from "./components/Matiere/Lettres";
import Sport from "./components/Matiere/Sport";

const App = () => {
  return (
    <MantineProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} index />
          <Route path="/recherche" element={<Recherche />} />
          <Route path="/bac-topics" element={<Topics />} />
          <Route path="/print-topics" element={<Print />} />
          <Route path="/sections" element={<Sections />} />
          <Route path="/login" element={<Login />} />
          <Route path="/Science" element={<Science />} />
          <Route path="/Mathématiques" element={<Mathématiques />} />
          <Route path="/Économie-gestion" element={<Economie_gestion />} />
          <Route path="/Technique" element={<Technique />} />
          <Route path="/Lettres" element={<Lettres />} />
          <Route path="/Informatique" element={<Informatique />} />
          <Route path="/Sport" element={<Sport />} />
        </Routes>
      </Router>
    </MantineProvider>
  );
};

export default App;
