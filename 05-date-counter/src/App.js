import { useState } from "react";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <Counter />
    </div>
  );
}
function Counter(props) {
  const [count, setCount] = useState(0);
  const [step, setStep] = useState(0);
  const currentDate = new Date();
  const futureDate = currentDate;
  futureDate.setDate(currentDate.getDate() + count);
  const futureDateFormatted = DateFormat(futureDate);

  return (
    <>
      <div className="count">
        <button onClick={() => setStep((c) => c - 1)}> - </button>
        <p>Step: {step}</p>
        <button onClick={() => setStep((c) => c + 1)}> + </button>
      </div>
      <div className="count">
        <button onClick={() => setCount((c) => c - step)}> - </button>
        <p>Count: {count}</p>
        <button onClick={() => setCount((c) => c + step)}> + </button>
      </div>
      <p>
        <span>{count === 0 ? `Today is` : `${count} days from now is`}</span>{" "}
        {[futureDateFormatted]}
      </p>
    </>
  );
}

function DateFormat(date) {
  const dateString = {
    weekday: "long", // "long" displays full weekday name (e.g., "Tuesday")
    day: "numeric", // Displays numeric day of the month (e.g., 17)
    month: "long", // "long" displays full month name (e.g., "September")
    year: "numeric", // Displays full year (e.g., 2024)
  };

  const DateFormatted = date.toLocaleDateString("en-us", dateString);
  return DateFormatted;
}
