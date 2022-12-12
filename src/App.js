import React, { useState } from "react";
import AddTodo from "./components/AddTodo/AddTodo";
import Color from "./components/Color";
import Like from "./components/Like";
import RenderPic from "./components/RenderPic";
import TodoList from "./components/TodoList/TodoList";
import "bootstrap/dist/css/bootstrap.min.css";

const App = () => {
  // ! переменная для хранения и отображения всех тасков
  const [todos, setTodos] = useState([]);

  // ! состояние для изменения, (хранится тот таск, который будем менять)
  const [editTodo, setEditTodo] = useState({});

  // ! функция для добавления
  function handleTask(newObj) {
    let newTodos = [...todos]; // копирует занчения предыдущего состояния
    newTodos.push(newObj); // в скопированный массив пушим новый таск
    setTodos(newTodos); // меняем состояние тудус
  }
  // ! функция на изменение статуса
  function changeStatus(id) {
    const newTodos = todos.map((item) => {
      if (item.id === id) {
        // сравнивает по айди
        item.status = !item.status; //переворачивает значение статус у этого объекта
      }
      return item; // возвращает измененный объект в новый массив
    });
    setTodos(newTodos); // меняем старое состояние на новое
  }

  // ! удаление по айди
  function deleteTodo(id) {
    let newTodos = todos.filter((item) => {
      return item.id !== id;
    });
    setTodos(newTodos); // меняете состояние и перерисовываете компонент
  }

  // ! функция для того чтобы получить один таск
  function handleEdit(index) {
    setEditTodo(todos[index]);
  }

  // ! функция на изменение
  const handleEditSave = (newTask) => {
    // принимает новый объект
    let newTodos = todos.map((item) => {
      // перебирает массив состояния todos, и возвращает новый массив
      if (item.id == newTask.id) {
        // сравнивает если айди нового таска равен айди какого-нибудь элемента в массиве
        return newTask; // возвращатся новый объект
      }
      return item; // если проверка не проходит, старый объект не меняется
    });
    setTodos(newTodos); // меняете состояние и перерисовываете компонент
  };

  console.log(editTodo);
  return (
    <div>
      {/* отображаем компонент AddTodo и передаем туда данные из App */}
      <AddTodo handleTask={handleTask} todos={todos} setTodos={setTodos} />
      <TodoList
        changeStatus={changeStatus}
        todos={todos}
        deleteTodo={deleteTodo}
        handleEdit={handleEdit}
        editTodo={editTodo}
        setEditTodo={setEditTodo}
        handleEditSave={handleEditSave}
      />
      {/* <Color /> */}
      {/* <Like />
      <RenderPic /> */}
    </div>
  );
};

export default App;
