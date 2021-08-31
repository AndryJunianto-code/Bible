import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './styles/main.css'
import {BrowserRouter as Router} from 'react-router-dom';
import {ViewportProvider} from './context/ViewportContext'
import {Provider} from 'react-redux'
import store from './redux/store'
import { QueryClientProvider,QueryClient } from 'react-query';

const client = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
    },
  },
})
ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Provider store={store}>
        <QueryClientProvider client={client}>
          <ViewportProvider>
              <App />
          </ViewportProvider>
        </QueryClientProvider>
      </Provider>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
