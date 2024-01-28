import axios from "axios";
import { Task } from "../types";

const baseUrl = 'http://localhost:4000/api/tasks';

const getAll = async (): Promise<Task[]> => {
  const response = await axios.get<Task[]>(baseUrl);
  return response.data
}

export default {
  getAll
}

