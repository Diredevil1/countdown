import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date();
      const targetDate = new Date("April 5, 2024 21:00:00");
      const difference = targetDate.getTime() - now.getTime();
      const seconds = Math.floor(difference / 1000);
      setCount(seconds);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const formatTime = (time) => {
    const hours = Math.floor(time / 3600);
    const minutes = Math.floor((time % 3600) / 60);
    const seconds = time % 60;

    const formattedTime = `${hours.toString().padStart(2, "0")}:${minutes.toString().padStart(2, "0")}:${seconds
      .toString()
      .padStart(2, "0")}`;
    return formattedTime;
  };

  return (
    <div>
      <h1>Project Epoch Beta 3</h1>
      <h2 style={{ fontSize: "24px" }}>Time Remaining: {formatTime(count)}</h2>
    </div>
  );
}

export default App;
