import ReactDOM from 'react-dom/client'
import './global.css';
import { BrowserRouter } from 'react-router-dom'
import { MainRoutes } from './router.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <MainRoutes />
  </BrowserRouter>
)