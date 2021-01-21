import React, { useState, useEffect } from "react";
import List from "./List";
import Alert from "./Alert";

function App() {
  const [name, setName] = useState(" ");
  const [list, setList] = useState([]);
  const [isEditing, setIsEditing] = useState(false);
  const [editId, setEditId] = useState(null);
  const [alert, setAlert] = useState({ show: false, msg: "", type: "" });

  const handleSubmit = e => {
    e.preventDefault();

    if (!name) {
      //
      setAlert({
        show: true,
        msg: "Please enter something...",
        type: "danger"
      }); setName("");
    } else if (name && isEditing) {
      //
    } else {
      const newItem = { id: new Date().getTime().toString(), title: name };
      setList([...list, newItem]);
      setAlert({
        show: true,
        msg: "Successfully ",
        type: "success"
      });
      setName("");
    }

    console.log(name);
  };

  return (
    <>
      <section className="section-center">
        <form className="grocery-form" onSubmit={handleSubmit}>
          {alert.show && <Alert haa={alert} />}
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
          {list.length > 0 && (
            <>
              <div className="grocery-container">
                <List items={list} />
              </div>
              <button className="clear-btn">clear items</button>
            </>
          )}
        </form>
      </section>
    </>
  );
}

export default App;
