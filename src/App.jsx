import { useState, useEffect } from 'react'
import './App.css'

export const App = () => {
  const [iteration, setIteration] = useState(0);
  // *** Niece's pick of colors ***
  const colors = ['white', 'white', 'white'];
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  // Change color every 2 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      const index = iteration % colors.length;
      document.body.style.backgroundColor = prefersReducedMotion ? '#ffff9b' : colors[index];
      setIteration(iteration + 1);
    }, 2000);

    return () => clearInterval(interval);
  }, [iteration, prefersReducedMotion, colors]);

  return (
    <>
      <div className="section">
        <div className="title">Title</div>
        <div>
          {/* *** Niece's image of choose from Pixabay */}
          <img src="" alt="Description of the image" className="image" />
        </div>
        <div className="info-text">Text text</div>
        <div className="centered-label"><label>
          {/* *** Niece's text for accessibility *** */}
          Accessibility<input
            type="checkbox"
            checked={prefersReducedMotion}
            onChange={(e) => setPrefersReducedMotion(e.target.checked)}
          />
        </label></div></div>
    </>
  );
};

// Steps with niece
// 1. Choose a fun theme!
// 2. Input title (24)
// 3. Choose 3 backgroundcolors, insert (line 7, replace whites)
// 4. Choose and input text for accessibility
// 5. Chose image (input on row 27)
// 6. Input info-text