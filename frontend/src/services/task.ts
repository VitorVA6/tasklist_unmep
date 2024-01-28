import axios from "axios";
import { Task } from "../types";

const baseUrl = 'http://localhost:4000/api/tasks';

const getAll = async (): Promise<Task[]> => {
  const response = await axios.get<Task[]>(baseUrl);
  return response.data
}

const getTaskById = async (id: string): Promise<Task> => {
  const response = await axios.get<Task>(`${baseUrl}/${id}`)
  return response.data
}

const updateTask = async (task: Task): Promise<Task> => {
  const response = await axios.put<Task>(`${baseUrl}/${task.id}`, task)
  return response.data
}

const deleteTask = async (id: string): Promise<void> => {
  await axios.delete(`${baseUrl}/${id}`)
}

const createTask = async (task: Omit<Task, 'id'>): Promise<Task> => {
  const response = await axios.post<Task>(`${baseUrl}`, task)
  return response.data
}

export default {
  getAll,
  getTaskById,
  updateTask,
  deleteTask,
  createTask
}

