import { Table } from 'react-bootstrap';
import { useTasksApi } from '../../apis/task.api';
import ContentLayout from '../../components/ContentLayout';

export default function TaskPage() {
  const { isError, isLoading, data } = useTasksApi();

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
