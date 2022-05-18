import React, { useState } from "react";

const NewTaskInput = ({ onSubmit }) =>{

    const [newItem, setNewItem] = useState("");

    function setNewTask({target}) {
        setNewItem(target.value);
    }

    function submit(e) {
        e.preventDefault();
        onSubmit(newItem);
        setNewItem("");
    }

    return (
        <div>
          <form onSubmit={submit}>
            <input
              className="Todo-input"
              placeholder="Digite uma nova tarefa"
              onChange={setNewTask}
              value={newItem}
            />
            <button type="submit">
              Adicionar
            </button>
          </form>
        </div>
      )

};

export default NewTaskInput;