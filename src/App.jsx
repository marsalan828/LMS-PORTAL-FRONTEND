import { useState } from 'react'
// import './App.css' 
// not using the react's default css here instead using tailwindcss with the import "./output.css";
import "./output.css";
import { AppProvider } from './context/AppContext';
import Home from './pages/Home';

function App() {

  return (
    <>
      <AppProvider>
          <Home />        
      </AppProvider>
    </>
  )
}

export default App
