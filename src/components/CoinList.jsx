import React, { useEffect, useState, useContext } from 'react'
import coinGecko from '../apis/CoinGecko';
import { watchListContext } from '../context/watchListContext';
import Coin from './Coin';

const CoinList = () => {
    const[coins, setCoins] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const { watchList } = useContext(watchListContext);
    console.log('watchList ==>', watchList);

    useEffect(() => {
        const fetchData = async () => {
            setIsLoading(true);
            const coinMarketsResponse = await coinGecko.get('/coins/markets', {
                params: {
                    vs_currency: 'usd',
                    ids: watchList.join(',')
                }
            });

            setCoins(coinMarketsResponse.data);
            setIsLoading(false);
            console.log('coinMarketsResponse.data  ===>', coinMarketsResponse.data);
        };

        fetchData();
    }, []);

    const renderCoins = () => {
        if (isLoading) {
            return (
                <div>Loading..</div>
            );
        }

        return (
            <ul className="coinlist list-group mt-2">
                {
                    coins.map((coin) => {
                        return <Coin key={ coin.id }  coin={ coin } />
                    })
                }
            </ul>
        );
    }

    return ( <div>{ renderCoins() }</div> );
};

export default CoinList;
