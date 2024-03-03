import { UseFormReturn, useForm } from 'react-hook-form';
import { ModalLayout, UseModalReturn, useModalLayout } from '../../layout/ModalLayout';

type AddTaskInputs = {
  title: string;
  description: string;
};

type Props = {
  formRef: UseFormReturn<AddTaskInputs>;
  modalRef: UseModalReturn;
};

export function useAddTaskModal({ onClosed }: Partial<{ onClosed: (value: any) => void }>) {
  const formRef = useForm<AddTaskInputs>();
  const modalRef = useModalLayout({
    onClosed: (result) => {
      onClosed && onClosed(result && formRef.getValues());
      formRef.reset();
    },
  });

  return { formRef, modalRef };
}

export default function AddTaskFormModal({ formRef, modalRef }: Readonly<Props>) {
  return (
    <ModalLayout {...modalRef.attach()}>
      <form id="addTaskForm">
        <div className="mb-3">
          <label htmlFor="taskTitle" className="form-label">
            Title
          </label>
          <input id="taskTitle" className="form-control" {...formRef.register('title')} />
        </div>
        <div className="mb-3">
          <label htmlFor="taskDescription" className="form-label">
            Description
          </label>
          <textarea
            id="taskDescription"
            className="form-control"
            rows={3}
            {...formRef.register('description')}></textarea>
        </div>
      </form>
    </ModalLayout>
  );
}
