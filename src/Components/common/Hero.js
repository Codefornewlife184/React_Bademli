import React from "react";

const Hero = () => {
  return (
    <div className="hero-container">
      <iframe
        width="100%"
        height="300"
        src="https://www.youtube.com/embed/DvV9x8EdDs8?autoplay=1&loop=1&controls=0"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
    </div>
  );
};

export default Hero;

// "https://www.youtube.com/embed/DvV9x8EdDs8?autoplay=1&loop=1&mute=1&controls=0"
