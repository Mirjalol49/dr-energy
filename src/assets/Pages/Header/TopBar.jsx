import React, { useState, useEffect } from 'react';
import './Header.css';
import { Sun, Cloud, CloudRain, CloudSnow, CloudLightning, Bitcoin, DollarSign, Euro, PoundSterling } from 'lucide-react';

const TopBar = () => {
    const [weather, setWeather] = useState(null);
    const [rates, setRates] = useState({
        USD_UZS: null,
        USD_RUB: null,
        GBP_USD: null,
        BTC_USD: null
    });
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                // Fetch Weather (Tashkent)
                // 41.2995° N, 69.2401° E
                const weatherRes = await fetch('https://api.open-meteo.com/v1/forecast?latitude=41.2995&longitude=69.2401&current_weather=true');
                const weatherData = await weatherRes.json();
                setWeather(weatherData.current_weather);

                // Fetch Currency (Base USD)
                const currencyRes = await fetch('https://api.exchangerate-api.com/v4/latest/USD');
                const currencyData = await currencyRes.json();

                // Fetch Crypto (Bitcoin) from CoinGecko
                const cryptoRes = await fetch('https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=usd');
                const cryptoData = await cryptoRes.json();
                const btcPrice = cryptoData.bitcoin?.usd;

                setRates({
                    USD_UZS: currencyData.rates.UZS,
                    USD_RUB: currencyData.rates.RUB,
                    GBP_USD: 1 / currencyData.rates.GBP,
                    BTC_USD: btcPrice
                });

                setLoading(false);
            } catch (error) {
                console.error("Error fetching top bar data:", error);

                // Fallback for partial data if one API fails
                if (!rates.USD_UZS) setLoading(false);
            }
        };

        fetchData();
        const interval = setInterval(fetchData, 600000); // 10 mins

        return () => clearInterval(interval);
    }, []);

    const getWeatherIcon = (code) => {
        // WMO Weather interpretation codes (WW)
        if (code === 0) return <Sun size={16} className="weather-icon sun" />;
        if (code >= 1 && code <= 3) return <Cloud size={16} className="weather-icon" />;
        if (code >= 45 && code <= 48) return <Cloud size={16} className="weather-icon fog" />;
        if (code >= 51 && code <= 67) return <CloudRain size={16} className="weather-icon rain" />;
        if (code >= 71 && code <= 77) return <CloudSnow size={16} className="weather-icon snow" />;
        if (code >= 80 && code <= 82) return <CloudRain size={16} className="weather-icon showers" />;
        if (code >= 95 && code <= 99) return <CloudLightning size={16} className="weather-icon storm" />;
        return <Sun size={16} className="weather-icon" />;
    };

    if (loading) return <div className="top-bar-placeholder"></div>;

    return (
        <div className="top-bar">
            <div className="container top-bar-container">
                <div className="top-bar-left">
                    {weather && (
                        <div className="weather-widget">
                            {getWeatherIcon(weather.weathercode)}
                            <span className="weather-text">Tashkent: {weather.temperature}°C</span>
                        </div>
                    )}
                </div>

                <div className="top-bar-right">
                    <div className="currency-item">
                        <DollarSign size={14} className="currency-icon" />
                        <span className="currency-pair">USD/UZS</span>
                        <span className="currency-value">{rates.USD_UZS?.toLocaleString('en-US', { maximumFractionDigits: 0 })}</span>
                    </div>
                    <div className="divider">|</div>
                    <div className="currency-item">
                        <span className="currency-symbol">₽</span>
                        <span className="currency-pair">USD/RUB</span>
                        <span className="currency-value">{rates.USD_RUB?.toFixed(2)}</span>
                    </div>
                    <div className="divider">|</div>
                    <div className="currency-item">
                        <PoundSterling size={14} className="currency-icon" />
                        <span className="currency-pair">GBP/USD</span>
                        <span className="currency-value">{rates.GBP_USD?.toFixed(2)}</span>
                    </div>
                    <div className="divider">|</div>
                    {rates.BTC_USD && (
                        <div className="currency-item highlight-btc">
                            <Bitcoin size={14} className="currency-icon btc-icon" />
                            <span className="currency-pair">BTC</span>
                            <span className="currency-value">${rates.BTC_USD?.toLocaleString('en-US', { maximumFractionDigits: 0 })}</span>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default TopBar;
