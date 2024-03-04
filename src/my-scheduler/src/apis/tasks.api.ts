import { TaskItem } from '../models/task.model';
import { useDataApi } from './common/get.api';

const taskRoute = '/tasks';
export function useGetTasksApi() {
  return useDataApi<TaskItem[]>(taskRoute);
}

export function useCreateTasksApi() {
  return useDataApi<TaskItem[]>(taskRoute);
}
