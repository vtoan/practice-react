import { Col, Container, Row } from 'react-bootstrap';
import { Outlet } from 'react-router-dom';
import AppBreadcrumb from '../components/AppBreadcrumb';
import Sidebar from '../components/Sidebar';

export default function MainLayout() {
  return (
    <Row className="vh-100 p-0 m-0">
      <Col xs={2} className="bg-light">
        <Sidebar />
      </Col>
      <Col xs={10}>
        <Container className="py-3 h-100">
          <small>
            <AppBreadcrumb />
          </small>
          <Outlet />
        </Container>
      </Col>
    </Row>
  );
}
