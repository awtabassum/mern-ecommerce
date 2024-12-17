import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import '@fortawesome/fontawesome-free/css/all.min.css';  // Font Awesome
import { Provider } from 'react-redux';
import store from './store/store.js';
import 'bootstrap/dist/css/bootstrap.min.css';  // Bootstrap if needed
import 'bootstrap/dist/js/bootstrap.js'
 

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
    <App />
    </Provider>
  </StrictMode>,
)
