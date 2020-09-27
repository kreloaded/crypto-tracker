import React from 'react'
import CoinList from '../components/CoinList'
import AddCoin from '../components/AddCoin';

const CoinSummary = () => {
    return (
        <div>
            <AddCoin />
            <CoinList />
        </div>
    );
};

export default CoinSummary;
