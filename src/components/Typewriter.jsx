import { useState, useEffect, useRef } from "react";

const Typewriter = ({ text, speed = 100, startDelay = 500 }) => {
  const [currentText, setCurrentText] = useState("");
  const indexRef = useRef(0);
  const timeoutRef = useRef(null);

  useEffect(() => {
    function typeWriter() {
      if (indexRef.current < text.length) {
        setCurrentText((prev) => prev + text.charAt(indexRef.current));
        indexRef.current++;
        timeoutRef.current = setTimeout(typeWriter, speed);
      }
    }

    timeoutRef.current = setTimeout(typeWriter, startDelay);

    return () => clearTimeout(timeoutRef.current);
  }, [text, speed, startDelay]);

  return <span style={{ color: "#60a5fa" }}>{currentText}</span>;
};

export default Typewriter;
