import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Counter from './component/Counter.jsx'
import Team from './pages/Team.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <App /> */}
    <Team/>
    {/* <Counter/> */}
  </React.StrictMode>,
)
