import { useState } from "react"
import Task from "./Task"
// import data from "./data"

export default function App() {
  const [items, setItems] = useState(["Red", "Blue", "Green"])
  const [newItem, setNewItem] = useState("")

  function handleChange(e) {
    setNewItem(e.target.value)
  }

  function handleSubmit(e) {
    e.preventDefault()
    if (newItem === "") return
    setItems([...items, newItem])
    setNewItem("") // ✅ resets the input field
  }

  function handleDelete(index) {
    setItems((prevItems) => {
      console.log(prevItems)
      return prevItems.filter((item, i) => i !== index)
    })
  }

  function handleSave(index, update) {
    setItems((prevItems) =>
      prevItems.map((item, i) => (i === index ? update : item))
    )
  }

  const itemsList = items.map((item, i) => (
    <Task
      key={i}
      task={item}
      handleDelete={() => handleDelete(i)}
      handleSave={(editText) => handleSave(i, editText)}
    />
  ))

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input value={newItem} onChange={handleChange} type="text" />
        <button>submit</button>
      </form>
      {itemsList}
    </div>
  )
}
