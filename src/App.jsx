import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import CoinSummary from './pages/CoinSummary';
import Header from './components/Header';
import CoinDetail from './pages/CoinDetail';
import './App.css'
import { WatchListContextProvider } from './context/watchListContext';

const App = () => {
    return (
        <div>
            <WatchListContextProvider>
                <BrowserRouter>
                <Header />
                    <Route exact path="/" component={ CoinSummary }></Route>
                </BrowserRouter>
            </WatchListContextProvider>
        </div>
    );
};

export default App;
