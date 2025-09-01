import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import './index.css'

const DOMElement = document.getElementById('root') // Busca la etiqueta root en el div root del .html
const VDOMElement = createRoot(DOMElement) // Creación de la raíz en el virtualDOM

VDOMElement.render( //Renderizo la App dentro del Virtual DOM
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>,
)