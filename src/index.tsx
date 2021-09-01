import {StrictMode } from 'react';
import ReactDOM from 'react-dom';
import 'antd/dist/antd.less';
import './index.css';
import { BrowserRouter, Route } from 'react-router-dom';
import DashboardPage from './pages/DashboardPage';
import LoginPage from './pages/LoginPage';
import './i18n'
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <StrictMode>
    <BrowserRouter>
      <Route path="/" exact component={DashboardPage} />
      <Route path="/login" component={LoginPage} />
    </BrowserRouter>
  </StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
