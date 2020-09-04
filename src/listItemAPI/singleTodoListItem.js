/*
object template

let todoItemObject = {
  itemContent: "This is a test item",
  previousConten: "",
  dateCreated: "",
  deleteMarker: false,
  edited: 0,
}; 

*/

// creates a new ID

const listOfAllId = []; // stores all the current todo Item Id's
const listItems = []; // this list is going to hold all the items of the todo list

const restoreIdList = [];
const restoreTodoListitems = [];

function createIdForTodoItem() {
  let id = Math.random() * 10000000000000000;
  if (!listOfAllId.includes(id)) {
    listOfAllId.push(id);
    return id;
  }
  return id;
}

function createNewTodoItem(itemContent = "Please add some content") {
  // this method returns an object of new single Todo item

  return {
    listItemID: id,
    itemContent: itemContent,
    previousContent: "Brand New",
    dateCreated: new Date(),
    deleteMarker: false,
    edited: 0,
  };
}

function addItemTodoList(itemObject) {}

function getTodoItem(id) {
  const todoItem = listItems.find((item) => item.id === id);
  return todoItem; // this returns an todo Item object
}

function editTodoItem(editedContent, id) {
  if (listItems.find((item) => item.id)) {
    item.previousContent = item.itemContent;
    item.ItemContent = editedContent;
    item.edited = item.edited++;
  }
}

function deleteTodoItem(id) {
  const item = listItems.find((item) => item.id === id);
  item.deleteMarker = true;
  restoreTodoListitems.push(item); // pushing the item to the restore array
  restoreIdList.push(item.id); // pushing the item id to restore array
  listOfAllId.remove(item.id); // removing the item from current list of items
  listItems.remove(item); // removing the item id from current list of ID's
}
