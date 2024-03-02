import { Table } from 'react-bootstrap';
import { TaskItem } from '../../models/task.model';

type Props = {
  data?: TaskItem[];
};

export default function TaskTable({ data }: Props) {
  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>#</th>
          <th>Task title</th>
        </tr>
      </thead>
      <tbody>
        {data?.map((task: any) => (
          <tr key={task.id}>
            <td>{task.id}</td>
            <td>{task.title}</td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
}
