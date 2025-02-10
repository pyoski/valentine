import { useState } from "react";
import "./App.css";

const phrases = [
  "No",
  "What?",
  "Are you joking...",
  "Come on this isnt funny",
  "Amy come on...",
  "I worked on this code and everything",
  "AMY :(",
  "I'm going to return your gifts",
  "Is this it :c",
  "I can't belive you",
  "Wait...",
  "You're just kidding around...",
  "Right?",
];
function App() {
  const [noNumber, setNoNumber] = useState(0);
  const [yesClick, setYesClicked] = useState(false);
  const yesButtonSize = noNumber * 20 + 16;

  function handleNoClick() {
    setNoNumber(noNumber + 1);
  }
  function getNoButtonText() {
    return phrases[Math.min(noNumber, phrases.length - 1)];
  }

  return (
    <div className="valentine-container">
      {yesClick ? (
        <>
          <img
            alt="kissing"
            src="https://media1.tenor.com/m/4j4UT0-4xTMAAAAC/peach-and-goma.gif"
          />
          <img
            alt="hair heart"
            src="https://i.postimg.cc/KzL77FCS/IMG-2597.jpg"
          />
          <div className="text">Happy Valentines day Amy!</div>
        </>
      ) : (
        <>
          <img
            alt="bears with hearts"
            src="https://media1.tenor.com/m/cbEunX-g34sAAAAC/mochi-cat-thinking-of-you.gif"
          />
          <div>Will you be my valentine?</div>
          <div>
            <button
              className="yesButton"
              style={{ fontSize: yesButtonSize }}
              onClick={() => setYesClicked(true)}
            >
              Yes
            </button>
            <button onClick={handleNoClick} className="noButton">
              {getNoButtonText()}
            </button>
          </div>
        </>
      )}
    </div>
  );
}

export default App;
