import { Link } from 'react-router-dom';

export default function Sidebar() {
  return (
    <>
      <p className="fw-bold pt-3 px-3">My scheduler</p>
      <ul className="nav flex-column">
        <li className="nav-item">
          <Link className="nav-link active" to={'/'}>
            Tasks
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link active" to={'/users'}>
            Users
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link active" to={'/schedulers'}>
            Scheduler
          </Link>
        </li>
      </ul>
    </>
  );
}
