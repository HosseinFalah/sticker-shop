import { createRoot } from 'react-dom/client'
import { RouterProvider } from 'react-router-dom';
import router from './Routes/router';

import './Styles/index.css';

createRoot(document.querySelector('#root')).render(
  <RouterProvider router={router}/>
)
