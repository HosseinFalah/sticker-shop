import { createRoot } from 'react-dom/client'
import { RouterProvider } from 'react-router-dom';
import { Provider } from "react-redux";
import router from './Routes/router';
import { store } from './App/Store';
import './Styles/index.css';

createRoot(document.querySelector('#root')).render(
  <Provider store={store}>
    <RouterProvider router={router}/>
  </Provider>
)
