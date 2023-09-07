import React from 'react'
import ReactDOM from 'react-dom/client'
import { TwitterCard } from '../components/twitter-card.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <TwitterCard userName='Mauricio Rojas' user='@mavrodev' userAvatarUrl='Bandit' />
  </React.StrictMode>,
)
