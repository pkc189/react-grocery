import React, { useState, useEffect } from "react";
import List from "./List";
import Alert from "./Alert";

function App() {
  const [name, setName] = useState(" ");
  const [list, setList] = useState(" ");
  const [isEditing, setIsEditing] = useState(false);
  const [editId, setEditId] = useState(null);
  const [alert, setAlert] = useState({ show: false, msg: "", type: "" });

  const handleSubmit = e => {
    e.preventDefault();

    if (!name) {
      //
    } else if (name && isEditing) {
      //
    } else {
      const newItem = { id: new Date().getTime().toString() };
      setList([...list, setList]);
      setName("");
    }

    console.log(name);
  };

  return (
    <>
      <section className="section-center">
        <form className="grocery-form">
          {alert.show && <Alert />}
          <h3>grocery bud</h3>

          <div className="form-control">
            <input
              type="text "
              className="grocery"
              value={name}
              onChange={e => setName(e.target.value)}
            />
            <button type="submit" className="submit-btn">
              {isEditing ? "edit" : "submit"}
            </button>
          </div>
          <div className="grocery-container">
            <List items={list} />
          </div>
          <button className="clear-btn">clear items</button>
        </form>
      </section>
    </>
  );
}

export default App;
