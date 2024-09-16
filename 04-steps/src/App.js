const message = ["Learn React", "Apply for jobs", "Invest your new income"];

export default function App() {
  const step = 3;
  function handlePrevious() {
    alert("Previous");
  }
  function handleNext() {
    alert("Next");
  }
  return (
    <div className="steps">
      <div className="numbers">
        <div className={`${step >= 1 ? "active" : ""}`}>1</div>
        <div className={`${step >= 1 ? "active" : ""}`}>2</div>
        <div className={`${step >= 1 ? "active" : ""}`}>3</div>
      </div>
      <p className="message">
        Step {step}: {message[step - 1]}
      </p>

      <div className="buttons">
        <button
          style={{ backgroundColor: "#7950f2", color: "#ffff" }}
          onClick={handlePrevious}
        >
          Previous
        </button>
        <button
          style={{ backgroundColor: "#7950f2", color: "#ffff" }}
          onClick={handleNext}
        >
          Next
        </button>
      </div>
    </div>
  );
}
