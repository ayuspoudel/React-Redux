import { useState } from "react";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <FlashCards />
    </div>
  );
}

const questions = [
  {
    id: 3457,
    question: "What language is React based on?",
    answer: "JavaScript",
  },
  {
    id: 7336,
    question: "What are the building blocks of React apps?",
    answer: "Components",
  },
  {
    id: 8832,
    question: "What's the name of the syntax we use to describe a UI in React?",
    answer: "JSX",
  },
  {
    id: 1297,
    question: "How to pass data from parent to child components?",
    answer: "Props",
  },
  {
    id: 9103,
    question: "How to give components memory?",
    answer: "useState hook",
  },
  {
    id: 2002,
    question:
      "What do we call an input element that is completely synchronised with state?",
    answer: "Controlled element",
  },
  {
    id: 4512,
    question: "What is a common tool used for managing routes in React?",
    answer: "React Router",
  },
  {
    id: 5632,
    question: "Which React hook is used for side effects?",
    answer: "useEffect",
  },
  {
    id: 6712,
    question: "How can you make a component reusable in React?",
    answer: "By passing props",
  },
  {
    id: 7451,
    question: "What is the purpose of useReducer in React?",
    answer: "To manage complex state logic",
  },
  {
    id: 8234,
    question: "What lifecycle method is commonly replaced by useEffect?",
    answer: "componentDidMount",
  },
  {
    id: 9198,
    question: "What command is used to start a new React app?",
    answer: "npx create-react-app",
  },
  {
    id: 1083,
    question: "How do you handle events in React?",
    answer: "Using event handlers like onClick",
  },
  {
    id: 2439,
    question: "What is the purpose of keys in React lists?",
    answer: "To help React identify which items have changed",
  },
  {
    id: 3347,
    question: "What does virtual DOM in React do?",
    answer: "It optimizes rendering by minimizing direct DOM manipulation",
  },
  {
    id: 4019,
    question: "What does lifting state up mean in React?",
    answer:
      "Moving state to a common ancestor to share data between components",
  },
  {
    id: 5324,
    question: "How can you optimize performance in a large React app?",
    answer: "By using React.memo or useMemo",
  },
  {
    id: 6431,
    question: "How do you add dynamic classes in React?",
    answer: "By using expressions within the className attribute",
  },
  {
    id: 7128,
    question: "What is the purpose of context in React?",
    answer: "To share data across components without prop drilling",
  },
  {
    id: 8229,
    question: "What is React's primary goal?",
    answer: "To efficiently manage and update the user interface",
  },
];

function FlashCards() {
  const [clicked, setClicked] = useState(0);
  function handleClick(key) {
    setClicked(key !== clicked ? key : null);
  }

  return (
    <div className="flashcards">
      {questions.map((iterator) => (
        <div
          onClick={() => handleClick(iterator.id)}
          key={iterator.id}
          className={clicked === iterator.id ? "selected" : ""}
        >
          {clicked === iterator.id ? iterator.answer : iterator.question}
        </div>
      ))}
    </div>
  );
}
