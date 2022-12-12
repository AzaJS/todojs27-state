import React, { useState } from "react";
import ModalEdit from "../ModalEdit";
import "./TodoList.css";

const TodoList = ({
  todos,
  changeStatus,
  deleteTodo,
  handleEdit,
  editTodo,
  setEditTodo,
  handleEditSave,
}) => {
  const [show, setShow] = useState(false); // состояние для отображения модалки

  const handleShow = () => setShow(true); // функция для отображения

  let style = {
    color: "red",
    listStyleType: "none",
  };
  //   console.log(changeStatus);
  return (
    <ul style={style}>
      {todos.map((item, index) => (
        <li key={item.id} className={item.status ? "completed" : ""}>
          {/* условный рендеринг класса */}
          <input type="checkbox" onChange={() => changeStatus(item.id)} />
          {item.task}
          <button onClick={() => deleteTodo(item.id)}>&times;</button>
          <button
            onClick={() => {
              handleShow(); // отображаем модальное окно
              handleEdit(index); // подставляет значение изменяемого объекта
            }}
          >
            EDIT
          </button>
        </li>
      ))}
      <ModalEdit
        editTodo={editTodo}
        handleShow={handleShow}
        show={show}
        setShow={setShow}
        setEditTodo={setEditTodo}
        handleEditSave={handleEditSave}
      />
    </ul>
  );
};

export default TodoList;
