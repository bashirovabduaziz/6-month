import React from "react";
import { Route, Routes } from "react-router-dom";
import './App.scss'
import Home from "./pages/Home/Home";
import Movies from "./pages/Movies/Movies";
import Support from "./pages/Support/Support";
import Subs from "./pages/Subscription/Subs";

const App = () => {
  return(
     <>
       <Routes >
        <Route path="/" element={<Home />}/>
        <Route path="/movies" element={<Movies />}/>
        <Route path="/support" element={<Support />}/>
        <Route path="/subs" element={<Subs />}/>
       </Routes>
     </>
     );
};

export default App;
