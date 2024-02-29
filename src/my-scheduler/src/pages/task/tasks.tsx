import axios from 'axios';
import { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';

type Props = {};

export default function TaskPage({}: Props) {
  const [tasks, setTasks] = useState([]);

  const taskItems = tasks.map((task: any) => (
    <tr key={task.id}>
      <td>{task.id}</td>
      <td>{task.title}</td>
    </tr>
  ));

  useEffect(() => {
    axios
      .get('https://my-json-server.typicode.com/vtoan/practice-react/tasks')
      .then((resp) => {
        console.log(resp);
        setTasks(resp.data);
      });
  }, []);

  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>#</th>
          <th>Task title</th>
        </tr>
      </thead>
      <tbody>{taskItems}</tbody>
    </Table>
  );
}
