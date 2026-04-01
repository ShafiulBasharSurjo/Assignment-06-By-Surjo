import React, { Suspense } from "react";
import "./App.css";
import Hero from "./Componenets/HeroSection/Hero";
import Navbar from "./Componenets/Navbar/Navbar";
import Tools from "./Componenets/Tools/Tools";

const fetchData = async () => {
  const res = await fetch("/data.json");
  return res.json();
};

function App() {
  const dataPromise = fetchData();
  return (
    <>
      <Navbar />
      <Hero />
      <Suspense
        fallback={<span className="loading loading-ring loading-lg"></span>}
      >
        <Tools dataPromise={dataPromise} />
      </Suspense>
    </>
  );
}

export default App;
