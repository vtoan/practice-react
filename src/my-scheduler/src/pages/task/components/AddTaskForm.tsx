import { useForm } from 'react-hook-form';
import { Modal, Button } from 'react-bootstrap';
import { useEffect, useState } from 'react';
import httpClient from '../../../utils/httpClient';
import { taskRoute } from '../../../apis/tasks.api';

type AddTaskInputs = {
  title: string;
  description: string;
};

export type UseModalReturn = {
  isShow: boolean;
  close: () => void;
  open: () => void;
};
export function useModal(): UseModalReturn {
  const [isShow, setIsShow] = useState(false);
  const handleClose = () => setIsShow(false);
  const handleOpen = () => setIsShow(true);
  return { isShow, close: handleClose, open: handleOpen };
}

type AddTaskFormProps = UseModalReturn & { onCreated: () => void };

export default function AddTaskForm({ close: modalClose, isShow: isModalShow, onCreated }: Readonly<AddTaskFormProps>) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const taskForm = useForm<AddTaskInputs>();

  useEffect(() => {
    taskForm.reset();
  }, [taskForm, isModalShow]);

  function handleSubmitted() {
    setIsSubmitting(true);
    httpClient
      .post(taskRoute, taskForm.getValues())
      .then((resp) => {
        onCreated();
        console.log(resp);
      })
      .catch((err) => {
        console.error(err);
      })
      .finally(() => {
        setIsSubmitting(false);
        modalClose();
      });
  }

  return (
    <Modal show={isModalShow} onHide={modalClose}>
      <Modal.Header closeButton>
        <Modal.Title>{'Add Task'}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <form id="addTaskForm">
          <div className="mb-3">
            <label htmlFor="taskTitle" className="form-label">
              Title
            </label>
            <input id="taskTitle" className="form-control" {...taskForm.register('title')} />
          </div>
          <div className="mb-3">
            <label htmlFor="taskDescription" className="form-label">
              Description
            </label>
            <textarea
              id="taskDescription"
              className="form-control"
              rows={3}
              {...taskForm.register('description')}></textarea>
          </div>
        </form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={modalClose}>
          Close
        </Button>
        <Button disabled={isSubmitting} variant="primary" onClick={handleSubmitted}>
          Submit
        </Button>
      </Modal.Footer>
    </Modal>
  );
}
