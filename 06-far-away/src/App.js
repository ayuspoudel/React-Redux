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
  return <h1>Far Away</h1>;
}

function Form() {
  function handleEvent(e) {
    e.preventDefault();
    alert(e.target.value);
  }
  function handleChange(e) {
    console.log(e.target.value);
  }
  return (
    <form className="add-form" onSubmit={(e) => handleEvent(e)}>
      <h3>What do you need for your trip?</h3>
      <input
        placeholder="...item"
        className="input"
        onChange={handleChange}
      ></input>
      <select>
        {Array.from({ length: 20 }, (_, index) => index + 1).map((elem) => (
          <option value={elem} key={elem}>
            {elem}
          </option>
        ))}
      </select>
      <button>Add</button>
    </form>
  );
}
function PackingList() {
  return (
    <div className="list">
      <ul>
        {initialItems.map((iterator) => (
          <Item props={iterator} key={iterator.id} />
        ))}
      </ul>
    </div>
  );
}

function Item({ props }) {
  function handleClick() {}
  return (
    <>
      <li>
        <span style={props.packed ? { textDecoration: `line-through` } : {}}>
          {props.quantity} {props.description}
        </span>
        <button onClick={handleClick}>❌</button>
      </li>
    </>
  );
}
function Stats() {
  return (
    <footer className="stats">
      <p>You have added X items to you List</p>
    </footer>
  );
}
