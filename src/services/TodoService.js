import axios from "axios";

const BASE_REST_API_URL = 'http://localhost:8090/api/todos';

export const getTodos = () => axios.get(BASE_REST_API_URL);
export const saveTodo = (todo) => axios.post(BASE_REST_API_URL, todo);
export const getTodo = (id) => axios.get(BASE_REST_API_URL + "/" + id);
export const updateTodo = (todo, id) => axios.put(BASE_REST_API_URL + "/" + id, todo);