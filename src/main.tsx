import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { NavBarRoutes } from './Routes/NavBar'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <NavBarRoutes />
  </React.StrictMode>,
)