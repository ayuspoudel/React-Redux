import { useState } from "react";

export default function App() {
  const [items, setItems] = useState([]);
  function handleAddItem(newItem) {
    setItems((prevItems) => [...prevItems, newItem]);
  }
  function handleDelete(id) {
    setItems((items) => items.filter((item) => item.id !== id));
  }
  return (
    <>
      <Logo />
      <Form onAddList={handleAddItem} />
      <PackingList items={items} onDeleteItem={handleDelete} />
      <Stats />
    </>
  );
}

function Logo() {
  return <h1>🏝️ Far Away</h1>;
}

function Form({ onAddList }) {
  const arr = Array.from({ length: 20 }, (curr, index) => index + 1);
  const [description, setDescription] = useState("");
  const [quant, setQuant] = useState(1);

  function handleChange(e) {
    setDescription(e.target.value);
  }
  function handleSubmit(e) {
    e.preventDefault();
    if (!description) return;
    const newItem = { description, quant, packed: false, id: Date.now() };
    setDescription("");
    setQuant(1);
    console.log(newItem);
    onAddList(newItem);
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

function PackingList({ items, onDeleteItem }) {
  return (
    <div className="list">
      <div className="height">
        <ul>
          {items.map((item) => (
            <Item item={item} key={item.id} onDeleteItem={onDeleteItem} />
          ))}
        </ul>
      </div>
    </div>
  );
}
function Item({ item, onDeleteItem }) {
  return (
    <li>
      <span style={item.packed ? { textDecoration: `line-through` } : {}}>
        {item.quant} {item.description}
      </span>
      <button onClick={() => onDeleteItem(item.id)}>❌</button>
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
