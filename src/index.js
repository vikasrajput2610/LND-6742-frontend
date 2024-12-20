import React, { createContext, useContext, useState } from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css'
const root = ReactDOM.createRoot(document.getElementById('root'));
export const Context=createContext()
const AppWrapper=()=>{
  const [flag,setFlag]=useState(false)
  return(
    <Context.Provider value={{flag,setFlag}}>
      <App/>
    </Context.Provider>
  )
}
root.render(
  <React.StrictMode>
    <AppWrapper />
  </React.StrictMode>
);