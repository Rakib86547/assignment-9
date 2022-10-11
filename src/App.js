import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Blog from './components/Blog/Blog';
import Error from './components/Error/Error';
import Statics from './components/Statics/Statics';
import Topic from './components/Topic/Topic';
import Main from './Main/Main';

function App() {
  const router = createBrowserRouter([
  {
    path: '/', 
    element: <Main></Main>,
    errorElement: <Error></Error>,
    children: [
      {path: '/', element: <Topic></Topic>},
      {path: '/statics', element: <Statics></Statics>},
      {path: '/blog', element: <Blog></Blog>}
    ]
  }
  ]);
  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
