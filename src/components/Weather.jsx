import styled from 'styled-components';
import { MainContainer } from '../util/templateStyle';
import { useEffect, useState } from 'react';
import weatherDescKo from '../libs/weatherDescKo';
import LocationIcon from '../assets/icon/location_icon.svg?react';

const WeatherContainer = styled(MainContainer)`
    padding: 0.25rem;
    width: 300px;
    height: 18%;
    background-color: ${props => props.theme.green};
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
`;

const LocationContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    font-size: 1.25rem;
`;

const DescriptionStr = styled.div`
    font-size: 0.8rem;
`;

const WeatherIcon = styled.img`
    width: 70px;
    height: 70px;
`;

const WeatherTemp = styled.div`
    font-size: 2rem;
`;

export default function Weather() {
    const [weather, setWeather] = useState({
        location: '',
        temperature: 0,
        weatherIconUrl: undefined,
        description: '',
    });
    const API_KEY = import.meta.env.VITE_WEATHER_API_KEY;

    const getWeather = async (lat = 37.5641, lon = 126.997) => {
        try {
            const res = await fetch(
                `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`,
            );
            const data = await res.json();

            const location = data.name;
            const temperature = Math.round(data.main.temp);
            const weatherIcon = data.weather[0].icon;
            const weatherIconUrl = `https://openweathermap.org/img/wn/${weatherIcon}@2x.png`;
            const weatherId = data.weather[0].id;
            const description = weatherDescKo[weatherId];

            setWeather({
                location,
                temperature,
                weatherIconUrl,
                description,
            });
        } catch (err) {
            console.log(err);
        }
    };

    useEffect(() => {
        navigator.geolocation.getCurrentPosition(position => {
            const lat = position.coords.latitude;
            const lon = position.coords.longitude;
            getWeather(lat, lon);
        });
    }, []);

    return (
        <WeatherContainer>
            <div>
                <LocationContainer>
                    <LocationIcon />
                    {weather.location}
                </LocationContainer>
                <DescriptionStr>{weather.description}</DescriptionStr>
            </div>
            <WeatherIcon src={weather.weatherIconUrl} alt={weather.description} />
            <WeatherTemp>{weather.temperature}°</WeatherTemp>
        </WeatherContainer>
    );
}
