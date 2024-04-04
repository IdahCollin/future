import { useState, useEffect } from 'react'
import './App.css'

export const App = () => {
  const [iteration, setIteration] = useState(0);
  // *** Niece's pick of background colors ***
  const colors = ['#a88ff6', 'lightblue', 'pink'];
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  // useEffect to Change color every 2 seconds. The color chosen for reduced motions is purple.
  useEffect(() => {
    const interval = setInterval(() => {
      const index = iteration % colors.length;
      document.body.style.backgroundColor = prefersReducedMotion ? '#a88ff6' : colors[index];
      setIteration(iteration + 1);
    }, 2000);

    return () => clearInterval(interval);
  }, [iteration, prefersReducedMotion, colors]);

  return (
    <>
      <div className="section">
        <div className="title">Hästar</div>
        <div>
          {/* *** Niece's image of choice from Pixabay */}
          <img src="https://cdn.pixabay.com/photo/2020/04/21/15/57/horse-5073632_1280.jpg" alt="Horse" className="image" />
        </div>
        {/* *** Niece's text */}
        <div className="info-text">Gjord av Linkan. Jag valde häst tema för jag älskar hästar. Dom är så fina och dom har 4 ben. Jag lär mig mycket när jag rider. </div>
        <div className="centered-label"><label>
          {/* *** Niece's text for accessibility *** */}
          Stäng av blink<input
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