import { useState } from "react"

export default function Task(props) {
  const [editText, setEditText] = useState(props.task)
  const [isEditable, setIsEditable] = useState(false)

  function handleClick() {
    props.handleSave(editText)
    setIsEditable(false)
  }

  console.log(props)
  return !isEditable ? (
    <div>
      {props.task}
      <button className="button-spacing" onClick={props.handleDelete}>
        x
      </button>
      <button onClick={() => setIsEditable(true)}>edit</button>
    </div>
  ) : (
    <div>
      <input value={editText} onChange={(e) => setEditText(e.target.value)} />
      <button onClick={handleClick}>save</button>
    </div>
  )
}
