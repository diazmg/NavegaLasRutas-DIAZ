import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

const DOMElement = document.getElementById('root')
const VDOMElement = createRoot(DOMElement)

VDOMElement.render( //Renderizo la App dentro del Virtual DOM
  <StrictMode>
    <App />
  </StrictMode>,
)