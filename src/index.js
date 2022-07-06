import React from 'react';
import { createRoot } from 'react-dom/client';
import './pages/index.css';
import App from './components/App.js';

const container = document.getElementById('root');
const root = createRoot(container); 
root.render(
<React.StrictMode>
      <App />
    </React.StrictMode>);