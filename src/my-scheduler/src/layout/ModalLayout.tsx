import { ReactNode, useState } from 'react';
import { Button, Modal } from 'react-bootstrap';

export function useModalLayout(options: {
  openAsDefault: boolean;
  onClose: (result: boolean) => void;
}) {
  const [isShow, setIsShow] = useState(options.openAsDefault);

  const handleClose = () => {
    setIsShow(false);
    options.onClose(false);
  };
  const handleShow = () => {
    setIsShow(true);
    options.onClose(true);
  };

  const attach = () => {
    return { isShow, handleClose, handleShow };
  };
  return { attach, close: handleClose, show: handleShow };
}

type Props = {
  isShow: boolean;
  handleClose: () => void;
  handleShow: () => void;
  children?: ReactNode;
};

export function ModalLayout(props: Readonly<Props>) {
  return (
    <Modal show={props.isShow} onHide={props.handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>New Task</Modal.Title>
      </Modal.Header>
      <Modal.Body>{props.children}</Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={props.handleClose}>
          Close
        </Button>
        <Button variant="primary" onClick={props.handleClose}>
          Submit
        </Button>
      </Modal.Footer>
    </Modal>
  );
}
