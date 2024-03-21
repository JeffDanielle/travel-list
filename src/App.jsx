import { useState } from 'react'
import './custom.css'
import Logo from "./components/Header";
import Form from "./components/Form";
import PackingList from "./components/PackingList";
import Stats from "./components/Stats";

function App() {
  const [listItems, setListItems] = useState([]);
  const numItems = listItems.length

  // Adding an item
  const handleAdd = (item) => {
    setListItems((items) => [...items, item]);
  }


  // Deleting an item
  const handleDelete = (id) => {
    setListItems((items) => items.filter((item) => item.id !== id))
  }

  // Updating the item's packed status
  const handleCheck = (id) => {
    setListItems((items) =>
      items.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item
      )
    )
  }
  console.log(listItems)
  return (
    <div className='app'>
      <Logo />
      <Form handleAddList={handleAdd} />
      <PackingList items={listItems} onDelete={handleDelete} onCheck={handleCheck} />
      <Stats items={listItems} numPacks={listItems} />
    </div>
  )
}

export default App
