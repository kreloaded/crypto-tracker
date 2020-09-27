import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import CoinSummary from './pages/CoinSummary';
import Header from './components/Header';
import CoinDetail from './pages/CoinDetail';
import './App.css'

const App = () => {
    return (
        <div>
            <BrowserRouter>
            <Header />
                <Route exact path="/" component={ CoinSummary }></Route>
            </BrowserRouter>
        </div>
    );
};

export default App;
