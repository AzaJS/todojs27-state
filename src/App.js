import React, { useState } from "react";
import AddTodo from "./components/AddTodo/AddTodo";
import TodoList from "./components/TodoList/TodoList";

const App = () => {
  const [todos, setTodos] = useState([]);
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
  console.log(todos);
  return (
    <div>
      {/* отображаем компонент AddTodo и передаем туда данные из App */}
      <AddTodo handleTask={handleTask} todos={todos} setTodos={setTodos} />
      <TodoList changeStatus={changeStatus} todos={todos} />
    </div>
  );
};

export default App;
