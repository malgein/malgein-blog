import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import {store, persistor} from './redux/store.js'
import ThemeProvider from './components/ThemeProvider.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <PersistGate persistor={persistor}>
    <Provider store={store}>
      <ThemeProvider>
        <React.StrictMode>
          <App />
        </React.StrictMode>,
      </ThemeProvider>  
    </Provider>
  </PersistGate>
)
