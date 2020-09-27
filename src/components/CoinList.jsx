import React, { useEffect, useState } from 'react'
import coinGecko from '../apis/CoinGecko';

const CoinList = () => {
    const[coins, setCoins] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
            const coinMarketsResponse = await coinGecko.get('/coins/markets', {
                params: {
                    vs_currency: 'usd',
                    ids: 'bitcoin, ethereum'
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
