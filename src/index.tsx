import {StrictMode } from 'react';
import ReactDOM from 'react-dom';
import 'antd/dist/antd.less';
import './index.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import { ApolloProvider } from 'react-apollo';
import ApolloClient from 'apollo-boost';
import App from './App'
import './i18n'
import reportWebVitals from './reportWebVitals';

const client = new ApolloClient({
  uri: "https://countries.trevorblades.com",
});

ReactDOM.render(
  <StrictMode>
    <ApolloProvider client={client}>
    <BrowserRouter>
      <Switch>
        <Route path={ '/login' } exact component={LoginPage} />
        <Route path={ ['/','/rsvnmgr'] } component={App} />
      </Switch>
    </BrowserRouter>
    </ApolloProvider>
  </StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
