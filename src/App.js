import React from 'react';
import { RouterProvider } from 'react-router-dom';
import { router } from './Routes/Router';

const App = () => {
  return (
    <div className='bg-white relative   '>
      <RouterProvider router={router}>

      </RouterProvider>
    </div>
  );
};

export default App;
