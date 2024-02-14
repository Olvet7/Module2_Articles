import "./App.css";
import articles from './data/articles.json'
import { useState } from "react";

export default function App() {
  const [selectedIdx, setSelectedIdx] = useState(0);

  const handlePrev = () => {
    setSelectedIdx(selectedIdx - 1);
  };

  const handleNext = () => {
    setSelectedIdx(selectedIdx + 1);
    console.log(articles);
  };

  return (
    <>
      <div>
        <button onClick={handlePrev}>Prev</button>
        <button onClick={handleNext}>Next</button>
      </div>
      <p>
        {selectedIdx + 1}/{articles.length}
      </p>
      <div>
        <h2>{articles[selectedIdx].title}</h2>
        <p>{articles[selectedIdx].desc}</p>
        <img src={articles[selectedIdx].text} alt={articles[selectedIdx].title} width='400px'/>
      </div>
    </>
  );
}
