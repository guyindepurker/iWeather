import React from 'react';
import { HashRouter as Router } from 'react-router-dom';

import AppHeader from 'cmps/AppHeader/AppHeader';
import RouterView from 'cmps/RouterView/RouterView';
import { useSelector } from 'react-redux';
import ToastMsg from 'cmps/ToastMsg/ToastMsg';

function App() {
  const { isDarkMode } = useSelector((state) => state.appReducer);
  return (
    <div className='App' data-theme={`${isDarkMode ? 'dark' : 'light'}`}>
      <Router>
        <AppHeader></AppHeader>
        <main className='main-content'>
          <RouterView></RouterView>
          <ToastMsg />
        </main>
      </Router>
    </div>
  );
}

export default App;
