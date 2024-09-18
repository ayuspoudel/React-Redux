import { useState } from "react";

export default function App() {
  return (
    <>
      <Logo />
      <Form />
      <PackingList />
      <Stats />
    </>
  );
}
const initialItems = [
  { id: 1, description: "Passports", quantity: 2, packed: false },
  { id: 2, description: "Socks", quantity: 12, packed: true },
  { id: 3, description: "Charger", quantity: 1, packed: false },
];
function Logo() {
  return <h1>🏝️ Far Away</h1>;
}

function Form() {
  const arr = Array.from({ length: 20 }, (curr, index) => index + 1);
  const [description, setDescription] = useState("");
  const [quant, setQuant] = useState(0);
  function handleChange(e) {
    setDescription(e.target.value);
  }
  function handleSubmit(e) {
    e.preventDefault();
  }
  return (
    <form className="add-form" onSubmit={handleSubmit}>
      <h3>What do you need for your trip?</h3>
      <select value={quant} onChange={(e) => setQuant(e.target.value)}>
        {arr.map((option) => (
          <option value={option} key={option}>
            {option}
          </option>
        ))}
      </select>
      <input
        type="text"
        placeholder="items..."
        value={description}
        onChange={handleChange}
      ></input>
      <button onClick={handleSubmit}>Add</button>
    </form>
  );
}

function PackingList() {
  return (
    <div className="list">
      <ul>
        {initialItems.map((item) => (
          <Item item={item} key={item.id} />
        ))}
      </ul>
    </div>
  );
}
function Item({ item }) {
  function handleButton() {
    alert("Remove?");
  }
  return (
    <li>
      <span style={item.packed ? { textDecoration: `line-through` } : {}}>
        {item.quantity} {item.description}
      </span>
      <button onClick={handleButton}>❌</button>
    </li>
  );
}

function Stats() {
  return (
    <footer className="stats">
      <em>You have added X items in your list, and you already packed X</em>
    </footer>
  );
}
