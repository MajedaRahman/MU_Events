import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import UpcomingEventsPage from './pages/UpcomingEventsPage';
import PastEventsPage from './pages/PastEventsPage';
import AboutPage from './pages/AboutPage';
import reportWebVitals from './reportWebVitals';

import {
  createBrowserRouter,
  RouterProvider,
  Route
} from "react-router-dom";
import StoreContextProvider from './context/storeContext';


const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>
  },
  {
    path: "upcomingEvents",
    element: <UpcomingEventsPage/>
  },
  {
    path: "pastEvents",
    element: <PastEventsPage/>
  },
  {
    path: "about",
    element: <AboutPage/>
  }
])
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <StoreContextProvider>
      <RouterProvider router={router} />
    </StoreContextProvider>
   
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
