import React from 'react';
import {useEffect, useState} from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {ThemeContext, ScreenContext} from './context';

import {register} from './serviceWorkerRegistration';

function Main (){
  const [theme, setTheme] = useState('theme1');
  const [data, setData] = useState({
    result: '0',
    arg: '0',
    sign: '+',
    showRes: false
  });
  
  useEffect(()=>{
    document.body.setAttribute('theme', theme)}, [theme]
  );

  return (
  <React.StrictMode>
    <ScreenContext.Provider value={{data, setData}}>
      <ThemeContext.Provider value={{theme, setTheme}}>
        <App />
      </ThemeContext.Provider>
    </ScreenContext.Provider>
  </React.StrictMode>
  )
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Main />);


register();
