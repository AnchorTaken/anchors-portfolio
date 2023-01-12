import { useEffect, useState } from "react";

const CodeDrop = () => {
  // Use state to track the position of the code drop
  const [position, setPosition] = useState({ x: 0, y: 0 });

  // Generate a random starting position for the code drop
  useEffect(() => {
    setPosition({
      x: Math.random() * window.innerWidth,
      y: Math.random() * window.innerHeight,
    });
  }, []);

  // Update the position of the code drop at regular intervals
  useEffect(() => {
    // Set up an interval timer to update the position of the code drop
    // at regular intervals
    const interval = setInterval(() => {
      setPosition((prevPosition) => {
        // If the code drop has reached the bottom of the screen,
        // reset its position to the top of the screen
        if (prevPosition.y > window.innerHeight) {
          // Generate a new random x position within the width of the screen
          return {
            x: Math.random() * window.innerWidth,
            y: Math.random() * window.innerHeight * 0.1,
          };
        }

        // Generate a random x position within the width of the screen
        const x = Math.random() * window.innerWidth;

        // Update the position of the code drop
        return {
          x: x,
          y: prevPosition.y * 10, // Multiply the velocity by 0.1 to slow down the code drop
        };
      }, 1000);
    });
    // Clear the interval timer when the component is unmounted
    return () => {
      clearInterval(interval);
    };
  }, []);

  // Render the code drop as a green square at the current position
  return (
    <div
      style={{
        position: "absolute",
        top: position.y,
        left: position.x,
        width: 1,
        height: 20 + Math.random() * 50,
        backgroundColor: "#fff",
        zIndex: 100,
        opacity: 0.5,
      }}
    />
  );
};

const CodeRain = () => {
  // Create an array of code drops
  const drops = [];
  for (let i = 0; i < 10; i++) {
    drops.push(<CodeDrop key={i} />);
  }

  return <div style={{ zIndex: 100, top: 0, left: 0 }}>{drops}</div>;
};

export default CodeRain;
