import { Table } from 'react-bootstrap';
import { useTasksApi } from '../../apis/tasks.api';
import ContentLayout from '../../layout/ContentLayout';

export default function TaskPage() {
  const { data, isError, isLoading } = useTasksApi();

  return (
    <ContentLayout
      isLoading={isLoading}
      isError={isError}
      errorMessage="No data !!!"
    >
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
    </ContentLayout>
  );
}
