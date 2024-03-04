import { UseFormReturn, useForm } from 'react-hook-form';
import { UseConfirmModalOptions, UseConfirmModalReturn, useConfirmModal } from '../../../components/ConfirmModal';

type AddTaskInputs = {
  title: string;
  description: string;
};

export function useAddTaskFormModal({ title = 'Add Task', onClosed }: Partial<UseConfirmModalOptions>) {
  const taskForm = useForm<AddTaskInputs>();
  const modal = useConfirmModal({
    title,
    onClosed: (result) => {
      onClosed && onClosed(result && taskForm.getValues());
      taskForm.reset();
    },
  });

  return [taskForm, modal] as [UseFormReturn<AddTaskInputs>, UseConfirmModalReturn];
}

type AddTaskFormProps = {
  form: UseFormReturn<AddTaskInputs>;
};

export default function AddTaskForm({ form }: Readonly<AddTaskFormProps>) {
  return (
    <form id="addTaskForm">
      <div className="mb-3">
        <label htmlFor="taskTitle" className="form-label">
          Title
        </label>
        <input id="taskTitle" className="form-control" {...form.register('title')} />
      </div>
      <div className="mb-3">
        <label htmlFor="taskDescription" className="form-label">
          Description
        </label>
        <textarea id="taskDescription" className="form-control" rows={3} {...form.register('description')}></textarea>
      </div>
    </form>
  );
}
