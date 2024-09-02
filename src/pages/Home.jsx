import React from "react";
import Hero from "../components/hero/Hero";
import Counter from "../components/counter/Counter";
import Video from "../components/video/Video";
import Sections from "../components/sections/Sections";
import Slider from "../components/slider/Slider";

function Home() {
  return (
    <div>
      <Hero />
      <Counter />
      <Sections />
      <Slider />
      <Video />
    </div>
  );
}

export default Home;
