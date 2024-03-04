import { useGetTasksApi } from '../../apis/tasks.api';
import ContentLayout from '../../layout/ContentLayout';
import { TaskItem } from '../../models/task.model';
import TaskTable from './components/TaskTable';
import AddTaskForm, { useAddTaskFormModal } from './components/AddTaskForm';
import { ConfirmModal } from '../../components/ConfirmModal';

export default function TaskPage() {
  const [{ data, isError, isLoading }, taskRefresh] = useGetTasksApi();
  const [addTaskForm, addTaskModal] = useAddTaskFormModal({
    onClosed: handleCreateTask,
  });

  function handleCreateTask(newTask: TaskItem) {
    console.log('handleCreateTask', newTask);
  }

  function handleEditTask(taskId: number) {
    console.log('handleEditTask', taskId);
  }

  function handleDeleteTask(taskId: number) {
    console.log('handleDeleteTask', taskId);
  }

  return (
    <>
      <div className="d-flex mb-3">
        <button disabled={isLoading} type="button" className="btn btn-primary me-3" onClick={() => addTaskModal.show()}>
          Add Task
        </button>
        <button disabled={isLoading} type="button" className="btn btn-link" onClick={() => taskRefresh()}>
          Refresh
        </button>
      </div>
      <ContentLayout isLoading={isLoading} isError={isError} errorMessage="No data !!!">
        <TaskTable data={data} onEdit={handleEditTask} onDelete={handleDeleteTask} />
      </ContentLayout>
      <ConfirmModal {...addTaskModal.attach()}>
        <AddTaskForm form={addTaskForm} />
      </ConfirmModal>
    </>
  );
}
