import React, { useState, useEffect, useRef } from "react";

function Type() {
  const [displayedText, setDisplayedText] = useState([]);
  const stringsRef = useRef([
    " 👉  Mobile Developer",
    " 👉  Web Developer",
    " 👉  Freelancer",
    " 👉  AI Enthusiast",
  ]);
  const typingSpeed = 60;
  const delayBetweenStrings = 500;

  useEffect(() => {
    let index = 0;
    let textIndex = 0;

    const typeString = () => {
      if (textIndex < stringsRef.current[index].length) {
        setDisplayedText((prev) => {
          const updatedText = [...prev];
          if (!updatedText[index]) updatedText[index] = "";
          updatedText[index] += stringsRef.current[index].charAt(textIndex);
          return updatedText;
        });
        textIndex++;
        setTimeout(typeString, typingSpeed);
      } else {
        index++;
        textIndex = 0;
        if (index < stringsRef.current.length) {
          setTimeout(typeString, delayBetweenStrings);
        }
      }
    };

    typeString();
  }, []);

  return (
    <div style={styles.container}>
      {displayedText.map((text, idx) => (
        <div key={idx} style={styles.text}>
          {text}
        </div>
      ))}
    </div>
  );
}

const styles = {
  container: {
    marginTop: "20px",
    textAlign: "left",
  },
  text: {
    color: "#cd5ff8",
    fontSize: "28px",
    fontWeight: "500",
    marginBottom: "8px",
    fontFamily: "'Roboto', sans-serif",
  },
};

export default Type;
