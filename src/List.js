import React from "react";
import { FaEdit, FaTrash } from "react-icons/fa";
const List = ({ items,remove,edit }) => {
  return (
    <>
      <div className="grocery-list">
        {items.map(item => {
          const { id, title } = item;
          return (
            <article key={id} className="grocery-item">
              <p>{title}</p>
              <button className="edit-btn" type="button" onClick={()=>edit(id)}>
                <FaEdit />
              </button>

              <button className="delete-btn" type="button" onClick={()=>remove(id)}>
                <FaTrash />
              </button>
            </article>
          );
        })}
      </div>
   
    </>
  );
};

export default List;
