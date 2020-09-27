import React, { useEffect, useState, useContext } from 'react'
import coinGecko from '../apis/CoinGecko';
import { watchListContext } from '../context/watchListContext';

const CoinList = () => {
    const[coins, setCoins] = useState([]);
    const { watchList } = useContext(watchListContext);
    console.log('watchList ==>', watchList);

    useEffect(() => {
        const fetchData = async () => {
            const coinMarketsResponse = await coinGecko.get('/coins/markets', {
                params: {
                    vs_currency: 'usd',
                    ids: watchList.join(',')
                }
            });

            console.log('coinMarketsResponse.data  ===>', coinMarketsResponse.data);
        };

        fetchData();
    });

    return (
        <div>

        </div>
    );
};

export default CoinList;
