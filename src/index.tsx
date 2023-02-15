import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Head from './components/Head/Head';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import DashboardPage from './pages/dashboard/DashboardPage';
import IndexPage from './pages/index';
import FileManagePage from './pages/filemanage/FileManagePage';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App />} >
          <Route path='Tab1' element={<DashboardPage />} />
          <Route path='Tab2' element={<FileManagePage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
