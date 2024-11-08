import { ListItem } from "./ListItem";

export function List(props) {
  if (!props.animals) {
    return <div>Loading...</div>;
  }

  if (props.animals.length === 0) {
    return <div>There are no animals in the list!</div>;
  }

  return (
    <ul>
      {props.animals.map((animal) => {
        // return <ListItem
        //         key={animal}
        //         animal={animal}>
        //         </ListItem>
        // return animal.startsWith('L') ?
        // <li key = {animal}>{animal}</li> : null;
        // return animal.startsWith('L') && <li key = {animal}>{animal}</li>
        return <li key={animal}>{animal}</li>;
      })}
    </ul>
  );
}

