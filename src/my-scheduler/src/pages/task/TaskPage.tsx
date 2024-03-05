import { taskRoute } from '../../apis/tasks.api';
import ContentLayout from '../../layout/ContentLayout';
import { TaskItem } from '../../models/task.model';
import TaskTable from './components/TaskTable';
import AddTaskForm, { useModal } from './components/AddTaskForm';
import { useDataApi } from '../../apis/common/useData';

export default function TaskPage() {
  const { data, isError, isLoading, refetch } = useDataApi<TaskItem[]>(taskRoute);
  const modal = useModal();

  function handleEditTask(taskId: number) {
    console.log('handleEditTask', taskId);
  }

  function handleDeleteTask(taskId: number) {
    console.log('handleDeleteTask', taskId);
  }

  return (
    <>
      <div className="d-flex mb-3">
        <button disabled={isLoading} type="button" className="btn btn-primary me-3" onClick={() => modal.open()}>
          Add Task
        </button>
        <button disabled={isLoading} type="button" className="btn btn-link" onClick={() => refetch()}>
          Refresh
        </button>
      </div>
      <ContentLayout isLoading={isLoading} isError={isError} errorMessage="No data !!!">
        <TaskTable data={data} onEdit={handleEditTask} onDelete={handleDeleteTask} />
      </ContentLayout>
      <AddTaskForm {...modal} onCreated={() => refetch()} />
    </>
  );
}
