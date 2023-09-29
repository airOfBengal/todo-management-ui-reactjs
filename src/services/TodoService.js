import axios from "axios";

const BASE_REST_API_URL = 'http://localhost:8090/api/todos';

export const getTodos = () => axios.get(BASE_REST_API_URL);