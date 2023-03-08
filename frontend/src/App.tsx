import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import FriendshipQuotes from './category/friendship-quotes/friendship-quotes';
import InspirationQuotes from './category/inspiration-quotes/inspiration-quotes';
import LifeQuote from './category/life/life-quotes';
import LoveQuotes from './category/love-quotes/love-quotes';
import MotivationQuotes from './category/motivational-quotes/motivation-quotes';
import PositiveQuotes from './category/positive-quotes/positive-quotes';
import HeaderComponent from './pages/home-page/header';
import SideBarComponent from './pages/nav-page/sideBarComponen';
function App() {
  return (
    <div className="App">
      <div>
        <SideBarComponent/>
      </div>
      <div style={{width: window.innerWidth}}>
        <div>
          <HeaderComponent/>
        </div>
        <div>
            <Routes>
              <Route path='/life-quotes' element={<LifeQuote/>} />
              <Route path='/motivational-quotes' element={<MotivationQuotes/>} />
              <Route path='/inspiration-quotes' element={<InspirationQuotes/>} />
              <Route path='/love-quotes' element={<LoveQuotes/>} />
              <Route path='/friendship-quotes' element={<FriendshipQuotes/>} />
              <Route path='/positive-quotes' element={<PositiveQuotes/>} />
            </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
