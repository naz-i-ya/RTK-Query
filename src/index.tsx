import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import './index.css';
import App from './App';
import  store  from './store/store';

const queryClient = new QueryClient();

ReactDOM.render(
  // <Provider store={store}>
  //   <QueryClientProvider client={queryClient}>
      <React.StrictMode>
        <App />
      </React.StrictMode>
  //     <ReactQueryDevtools />
  //   </QueryClientProvider>
  // </Provider>,
  ,document.getElementById('root')
);
