import { TaskItem } from '../models/task.model';
import { useDataApi } from './common/get.api';

const taskRoute = '/tasks';
export function useTasksApi() {
  return useDataApi<TaskItem[]>(taskRoute);
}
