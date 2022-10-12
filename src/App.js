import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Blog from './components/Blog/Blog';
import Error from './components/Error/Error';
import Quizs from './components/Quizs/Quizs';
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
      {path: '/',
      loader: () => fetch('https://openapi.programming-hero.com/api/quiz'),
      element: <Topic></Topic>},
      {path: '/statics',
      element: <Statics></Statics>},
      {path: '/blog', element: <Blog></Blog>},
      {path: '/quiz/:id',
      loader: async ({params}) => {
        return fetch(`https://openapi.programming-hero.com/api/quiz/${params.id}`)
      },
      element: <Quizs></Quizs>
    }
    ]}
  ]);
  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
