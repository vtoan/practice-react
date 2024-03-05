import { Button, Table } from 'react-bootstrap';
import { TaskItem } from '../../../models/task.model';

type Props = {
  data?: TaskItem[];
  onEdit: (itemId: number) => void;
  onDelete: (itemId: number) => void;
};

export default function TaskTable({ data, onEdit, onDelete }: Readonly<Props>) {
  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th style={{ width: '10%' }}>#</th>
          <th>Task title</th>
          <th style={{ width: '20%' }}></th>
        </tr>
      </thead>
      <tbody>
        {data?.map((task: any) => (
          <tr key={task.id}>
            <td>{task.id}</td>
            <td>{task.title}</td>
            <td style={{ textAlign: 'end' }}>
              <Button size="sm" variant="light" onClick={() => onEdit(task.id)}>
                Edit
              </Button>{' '}
              <Button size="sm" variant="danger" onClick={() => onDelete(task.id)}>
                Delete
              </Button>
            </td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
}
