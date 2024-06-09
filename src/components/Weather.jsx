import styled from 'styled-components';
import { MainContainer } from '../util/templateStyle';

const WeatherContainer = styled(MainContainer)`
    width: 280px;
    height: 15%;
    background-color: ${props => props.theme.green};
`;

export default function Weather() {
    return <WeatherContainer>WeatherBox</WeatherContainer>;
}
