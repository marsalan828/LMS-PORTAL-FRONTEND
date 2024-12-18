import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css';
import App from './App.jsx'
// import { AppProvider } from './context/AppContext';
import { Provider } from 'react-redux';
import { reduxStore } from './reduxStore.jsx';

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={reduxStore}>
      <App />
    </Provider>
  </StrictMode>
);
