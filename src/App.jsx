import "./App.css";
import articles from './data/articles.json'
import { useState } from "react";
import { Articles } from "./components/Articles/Articles";
import Controls from "./components/Controls/Controls";
import Progress from "./components/Progress/Progress";

export default function App() {
  const [selectedIdx, setSelectedIdx] = useState(0);
  const visibleArtices = articles[selectedIdx];
  const isFirst = selectedIdx === 0;
  const isLast = selectedIdx === articles.length - 1;
  const current = selectedIdx + 1;
  const total = articles.length;

  const handlePrev = () => {
    setSelectedIdx(selectedIdx - 1);
  };

  const handleNext = () => {
    setSelectedIdx(selectedIdx + 1);
    console.log(articles);
  };

  return (
    <>
      <Controls first={isFirst} last={isLast} onPrev={handlePrev} onNext={handleNext} />
      <Progress current={current} total={total} />
      {/* <p>
        {selectedIdx + 1}/{articles.length}
      </p> */}
      <Articles article={visibleArtices} />
    </>
  );
}
