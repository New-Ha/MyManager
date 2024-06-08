import { useState } from 'react';
import { getDay, getDaysInMonth } from 'date-fns';
import styled from 'styled-components';

const CalenderContainer = styled.div`
    width: 70%;
    background-color: #fff;
    border-radius: 50px;
    background: #f5f5f5;
    box-shadow: 9px 9px 18px #e4e4e4, -9px -9px 18px #ffffff;
    display: flex;
    justify-content: center;
    padding-top: 2rem;
`;

const CalenderContent = styled.div`
    padding: 2rem;
`;

const DaysNameContainer = styled.div`
    display: flex;
    font-size: 20px;

    > div {
        width: 6rem;
        height: 4rem;
        margin-bottom: 1rem;
    }

    > button {
        width: 6rem;
        height: 5rem;
        text-align: center;
        background: none;
        border: none;
        font-size: 20px;
        cursor: pointer;

        :hover {
            background-color: white;
        }
    }
`;
export default function Calender() {
    const DAY_OF_WEEK = 7;
    const DAY_LIST = ['일', '월', '화', '수', '목', '금', '토'];

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

    return (
        <CalenderContainer>
            <CalenderContent>
                <DaysNameContainer>
                    {DAY_LIST.map(day => (
                        <div key={day}>{day}</div>
                    ))}
                </DaysNameContainer>
                {currentMonthArray.map((days, idx) => (
                    <DaysNameContainer key={idx}>
                        {days.map(day => (
                            <button key={day}>{day === 0 ? '' : day}</button>
                        ))}
                    </DaysNameContainer>
                ))}
            </CalenderContent>
        </CalenderContainer>
    );
}
