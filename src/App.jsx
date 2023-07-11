import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from "react";
import HomePage from './components/pages/HomePage';
import CountriesDetails from './components/pages/CountriesDetails';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/:name" element={<CountriesDetails />}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;