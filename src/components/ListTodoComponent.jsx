import React, { useEffect, useState } from "react";
import { getTodos } from "../services/TodoService";
import { useNavigate } from "react-router-dom";

const ListTodoComponent = () => {
  const [todos, setTodos] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    listTodos();
  }, []);

  function listTodos() {
    getTodos()
      .then((response) => {
        setTodos(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }

  function addNewTodo(e) {
    navigate("/add-todo");
  }

  return (
    <div className="container">
      <h2 className="text-center">Todo List</h2>
      <button className="btn btn-primary mb-2" onClick={addNewTodo}>
        Add Todo
      </button>
      <div>
        <table className="table table-bordered table-striped">
          <thead>
            <tr>
              <th>Title</th>
              <th>Description</th>
              <th>Completed</th>
            </tr>
          </thead>
          <tbody>
            {todos.map((todo) => (
              <tr key={todo.id}>
                <td>{todo.title}</td>
                <td>{todo.description}</td>
                <td>{todo.completed ? "Yes" : "No"}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ListTodoComponent;
