import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Todo from './Todo.jsx'
import Pass from './Pass.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Pass />
  </StrictMode>,
)
