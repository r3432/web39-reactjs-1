import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

// Import File Styles.css
import "./assets/css/styles.css"

import "./assets/admin/css/bootstrap.min.css"
import './assets/admin/css/bootstrap-icons.css'
import './assets/admin/css/apexcharts.css'
import './assets/admin/css/main.css'

//import js admin
import './assets/admin/js/jquery.min.js'
import './assets/admin/js/bootstrap.bundle.min.js'
import './assets/admin/js/apexcharts.min.js'
import './assets/config/Tailween.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
