import { Spinner } from 'react-bootstrap';

export default function Loading() {
  return (
    <Spinner animation="border">
      <span className="visually-hidden">Loading...</span>
    </Spinner>
  );
}
