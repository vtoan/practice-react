import './App.css';
import { RouterProvider } from 'react-router-dom';
import { browserRouter } from './router';

export default function App() {
  return (
    <div className="App">
      <RouterProvider router={browserRouter}></RouterProvider>
    </div>
  );
}
