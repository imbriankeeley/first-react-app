import "./App.css";
import { List } from "./List";

function App() {
  const animals = ["Lion", "Cow", "Snake", "Lizard"];

  return (
    <>
      <h1>Animals: </h1>
      <List animals={animals} />
      <p>Hello there!</p>
    </>
  );
}

export default App;
