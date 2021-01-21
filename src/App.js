import React, { useState, useEffect } from "react";
import List from "./List";
import Alert from "./Alert";

function App() {
  const [name, setName] = useState("");
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

      setAlert({show:true,msg:"Edited",type:"success"})
     
     setList(list.map((item)=>{

       if(item.id==editId)
       return {...item,title:name}
       else return item
     }))


      console.log(name);
    } else {
      setAlert({show:false,msg:'',type:''})
      const newItem = { id: new Date().getTime().toString(), title: name };
      setList([...list, newItem]);
      setAlert({
        show: true,
        msg: "Successfully ",
        type: "success"
      });
      setName("");
      console.log(alert)
    }


  };

const removeItem = (id)=>{
setAlert({
        show: true,
        msg: "deleted ",
        type: "danger"
      });
   setList(list.filter((item)=>item.id !=id));
   console.log(id)
}

const clearItems = () =>{

     setAlert({show:true,msg:'You deleted items',type:'danger'});
     setList([]);

}

const editItems = (id)=>{

  let sp = list.find((item)=>item.id===id)

  setIsEditing(true);
  setEditId(id);
  setName(sp.title)
 console.log(sp)
}

useEffect(()=>{
  const timeout = setTimeout(()=>{
    setAlert({...alert,show:false})
  },3000)
  return ()=>clearTimeout(timeout);
},[alert.show])


  return (
    <>
      <section className="section-center">
        <form className="grocery-form" onSubmit={handleSubmit}>
          {alert.show && <Alert {...alert} />}
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
                <List items={list} remove={removeItem} edit ={editItems}/>
              </div>
              <button className="clear-btn" onClick={clearItems}>clear items</button>
            </>
          )}
        </form>
      </section>
    </>
  );
}

export default App;
