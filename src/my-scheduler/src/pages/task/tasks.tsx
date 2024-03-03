import { useTasksApi } from '../../apis/tasks.api';
import ContentLayout from '../../layout/ContentLayout';
import { TaskItem } from '../../models/task.model';
import TaskTable from './TaskTable';
import AddTaskFormModal, { useAddTaskModal } from './AddTaskForm';

export default function TaskPage() {
  const { data, isError, isLoading } = useTasksApi();
  const addTaskModal = useAddTaskModal({
    onClosed: onCreateTask,
  });

  function onCreateTask(newTask: TaskItem) {
    console.log('onCreateTask', newTask);
  }

  return (
    <>
      <ContentLayout isLoading={isLoading} isError={isError} errorMessage="No data !!!">
        <div className="d-flex mb-3">
          <button type="button" className="btn btn-primary me-3" onClick={() => addTaskModal.modalRef.show()}>
            Add Task
          </button>
          <button type="button" className="btn btn-link">
            Refresh
          </button>
        </div>
        <TaskTable data={data} />
      </ContentLayout>
      <AddTaskFormModal {...addTaskModal} />
    </>
  );
}
