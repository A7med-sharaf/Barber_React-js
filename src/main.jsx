import { createRoot } from 'react-dom/client'
import './index.css'
import "bootstrap/dist/css/bootstrap.css"
import "bootstrap/dist/js/bootstrap.js"

import "animate.css"

import App from './App.jsx'
import { RecoilRoot } from 'recoil'

createRoot(document.getElementById('root')).render(
  <RecoilRoot>   
     <App />
  </RecoilRoot>

  
)
