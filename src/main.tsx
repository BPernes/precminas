import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { SnackbarContextProvider } from './contexts/SnackbarContextProvider/SnackbarContextProvider.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <SnackbarContextProvider>
      <App />
    </SnackbarContextProvider>
  </React.StrictMode>,
)
