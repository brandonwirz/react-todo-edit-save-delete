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
    <div className="leading">
      <div className="buttons">
        {props.task}
        <button className="button-spacing" onClick={props.handleDelete}>
          x
        </button>
        <button className="button-spacing" onClick={() => setIsEditable(true)}>
          edit
        </button>
      </div>
    </div>
  ) : (
    <div className="leading">
      <div className="buttons">
        <input value={editText} onChange={(e) => setEditText(e.target.value)} />
        <button className="button-spacing" onClick={handleClick}>
          save
        </button>
      </div>
    </div>
  )
}
