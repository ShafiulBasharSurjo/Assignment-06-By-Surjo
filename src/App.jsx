import React, { Suspense } from "react";
import "./App.css";
import Hero from "./Componenets/HeroSection/Hero";
import Navbar from "./Componenets/Navbar/Navbar";
import Tools from "./Componenets/Tools/Tools";
import Rest from "./Componenets/lowerpart/Rest";
import Options from "./Componenets/Options/Options";
import Simple from "./Componenets/Simple/Simple";

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
      <Options />
      <Simple />
      <Rest />
    </>
  );
}

export default App;
