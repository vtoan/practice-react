import { useForm } from 'react-hook-form';
import { ModalLayout, useModalLayout } from '../../layout/ModalLayout';

type AddTaskInputs = {
  title: string;
  description: string;
};

type Props = {
  onClosed: (values: any) => void;
};

export default function AddTaskFormModal({ onClosed }: Readonly<Props>) {
  const { register, getValues } = useForm<AddTaskInputs>();

  const modalLayout = useModalLayout({
    openAsDefault: true,
    onClose: (result) => {
      console.log('addTaskModal', result);
      onClosed(result ? getValues() : undefined);
    },
  });

  return (
    <ModalLayout {...modalLayout.attach()}>
      <form id="addTaskForm">
        <div className="mb-3">
          <label htmlFor="taskTitle" className="form-label">
            Title
          </label>
          <input
            id="taskTitle"
            className="form-control"
            {...register('title')}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="taskDescription" className="form-label">
            Description
          </label>
          <textarea
            id="taskDescription"
            className="form-control"
            rows={3}
            {...register('description')}
          ></textarea>
        </div>
      </form>
    </ModalLayout>
  );
}
