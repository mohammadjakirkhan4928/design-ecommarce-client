import logo from './logo.svg';
import './App.css';
import { RouterProvider } from 'react-router-dom';
import { routes } from './Routes/Route';
import { Toaster } from 'react-hot-toast';

function App() {
  return (
    <div className="App">
      <RouterProvider router={routes}></RouterProvider>
      <Toaster />
    </div>
  );
}

export default App;
