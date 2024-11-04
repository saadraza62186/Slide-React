import { useState } from 'react';
import './App.css';

function App() {
  const [activeIndex, setActiveIndex] = useState(0);

  // Headings array
  const headings = ["Learn Knowledge", "Invest", "Earn"];
  
  // Colors array for each heading
  const colors = ["#FF5733", "#33FF57", "#3357FF"]; // Replace with your desired colors for each heading

  // Next button handling
  const nextHandling = () => {
    if (activeIndex < headings.length - 1) {
      setActiveIndex(activeIndex + 1);
    }
  };

  // Previous button handling
  const prevHandling = () => {
    if (activeIndex > 0) {
      setActiveIndex(activeIndex - 1);
    }
  };

  return (
    <>
      <div id="count">
        {headings.map((_, index) => (
          <li
            key={index}
            className={`item1 ${index === activeIndex ? 'active' : ''}`}
            style={{
              backgroundColor: index === activeIndex ? colors[index] : '#ccc', // Default color if not active
            }}
          >
            {index + 1}
          </li>
        ))}
      </div>
      <div id="heading">
        <h1>{headings[activeIndex]}</h1>
      </div>
      <div id="btn">
        <button className="btn1" onClick={prevHandling} disabled={activeIndex === 0}>
          Previous
        </button>
        <button className="btn1" onClick={nextHandling} disabled={activeIndex === headings.length - 1}>
          Next
        </button>
      </div>
    </>
  );
}

export default App;
