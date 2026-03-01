import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { StoreProvider } from "./context/StoreContext";

ReactDOM.createRoot(document.getElementById('root')).render(
   <StoreProvider>
    <App />
  </StoreProvider>
)