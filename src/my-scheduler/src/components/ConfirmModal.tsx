import { PropsWithChildren, useState } from 'react';
import { Button, Modal } from 'react-bootstrap';

export type UseConfirmModalReturn = {
  attach: () => ConfirmModalProps;
  close: (value?: any) => void;
  show: () => void;
};

export function useConfirmModal(options: { onClosed: (result: any) => void }) {
  const [isShow, setIsShow] = useState(false);
  const handleShow = () => setIsShow(true);
  const handleClose = (value: any = false) => {
    setIsShow(false);
    options.onClosed(value);
  };

  const attach = () => {
    return { isShow, handleClose } as ConfirmModalProps;
  };
  return { attach, close: handleClose, show: handleShow } as UseConfirmModalReturn;
}

type ConfirmModalProps = PropsWithChildren<{
  isShow: boolean;
  handleClose: (value?: any) => void;
}>;

export function ConfirmModal(props: ConfirmModalProps) {
  return (
    <Modal show={props.isShow} onHide={() => props.handleClose(false)}>
      <Modal.Header closeButton>
        <Modal.Title>New Task</Modal.Title>
      </Modal.Header>
      <Modal.Body>{props.children}</Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={() => props.handleClose(false)}>
          Close
        </Button>
        <Button variant="primary" onClick={() => props.handleClose(true)}>
          Submit
        </Button>
      </Modal.Footer>
    </Modal>
  );
}
