import React from "react";
import ApplicationHeader from "../components/ApplicationHeading";
import InputElementComponent from "../components/BasicTextFields";
import ListItems from "../components/ListItems";
import { useState } from "react";
import {
  createNewTodoItem,
  createIdForTodoItem,
} from "../listItemAPI/singleTodoListItem";
import "./App.css";

function App() {
  const [listItems, setListItem] = useState([]);

  function pushItemToList(itemData) {
    const id = createIdForTodoItem();
    let obj = createNewTodoItem(itemData, id);
    setListItem((a) => {
      return [...a, obj];
    });
  }

  return (
    <div className="App">
      <ApplicationHeader />
      <InputElementComponent addItemToList={pushItemToList} />

      <pre> {JSON.stringify(listItems, null, 2)} </pre>
    </div>
  );
}

export default App;
