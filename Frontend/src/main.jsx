import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')).render(
 <BrowserRouter>
    <div className='dark:bg-slate-100 dark:text-slate-950'>
      <App />
    </div>
 </BrowserRouter>
)
