import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { AuthContextProvider } from './context/AuthContext.jsx'
import { AuthContextProvider1 } from './components/context/Authtext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
      <AuthContextProvider>
        <AuthContextProvider1>
        <React.StrictMode>
        <App />
        </React.StrictMode>
        </AuthContextProvider1>
      </AuthContextProvider>
);
