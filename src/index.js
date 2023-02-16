import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import AuthProvider from './context/AuthProvider';
import { Toaster } from 'react-hot-toast';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const queryClient = new QueryClient()

ReactDOM.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <Toaster />
        <App />
      </AuthProvider>
    </QueryClientProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
