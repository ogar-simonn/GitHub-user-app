import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import {GitHubProvider} from "./context/context"
import "./index.css"
import App from './App';

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <GitHubProvider>
    <App />
    </GitHubProvider>
  </StrictMode>
);
