import { useState } from 'react';
import { getDay, getDaysInMonth } from 'date-fns';
import styled from 'styled-components';
import { MainContainer } from '../util/templateStyle';
import { Link } from 'react-router-dom';

const CalenderContainer = styled(MainContainer)`
    width: 100%;
    padding: 3rem 1rem;
    display: flex;
    flex-direction: column;
`;

const CalenderHeader = styled.div`
    margin-bottom: 1.5rem;
`;

const CalenderYear = styled.div`
    font-size: 2rem;
    font-weight: 300;
    text-align: center;
`;

const CalenderMonth = styled.div`
    font-size: 2.5rem;
    font-weight: 500;
    text-align: center;
`;

const CalenderGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(7, minmax(14%, 1fr));
    grid-auto-rows: 4.5rem;
    overflow: auto;
    text-align: center;
    font-size: 1.25rem;
    font-weight: 300;
`;

const DayLink = styled.div``;

export default function Calender() {
    const DAY_OF_WEEK = 7;
    const DAY_LIST = ['일', '월', '화', '수', '목', '금', '토'];
    const MONTH_LIST = [
        'JANUARY',
        'FEBRUARY',
        'MARCH',
        'APRIL',
        'MAY',
        'JUNE',
        'JULY',
        'AUGUST',
        'SEPTEMBER',
        'OCTOBER',
        'NOVEMBER',
        'DECEMBER',
    ];

    const [currentDate, setCurrentDate] = useState(new Date());

    const currentYear = currentDate.getFullYear();
    const currentMonth = currentDate.getMonth();
    const currentDay = Array(getDay(new Date(currentYear, currentMonth, 1))).fill(0);
    const currentMonthDays = Array(getDaysInMonth(currentDate))
        .fill(0)
        .map((_, i) => i + 1);

    const currentMonthArray = currentDay.concat(currentMonthDays).reduce((acc, cur, idx) => {
        const chunkIndex = Math.floor(idx / DAY_OF_WEEK);
        if (!acc[chunkIndex]) {
            acc[chunkIndex] = [];
        }
        acc[chunkIndex].push(cur);
        return acc;
    }, []);

    const onClickDay = e => {
        const target = e.currentTarget;
        console.log(currentDate, target);
    };

    return (
        <CalenderContainer>
            <CalenderHeader>
                <CalenderYear>{currentYear}</CalenderYear>
                <CalenderMonth>{MONTH_LIST[currentMonth]}</CalenderMonth>
            </CalenderHeader>
            <CalenderGrid>
                {DAY_LIST.map(el => (
                    <span>{el}</span>
                ))}
            </CalenderGrid>
            <CalenderGrid>
                {currentDay.concat(currentMonthDays).map(el => (
                    <DayLink onClick={onClickDay}>{el === 0 ? '' : el}</DayLink>
                ))}
            </CalenderGrid>
        </CalenderContainer>
    );
}
