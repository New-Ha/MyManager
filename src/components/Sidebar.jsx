import { Link, NavLink } from 'react-router-dom';
import styled from 'styled-components';
import Home from '../assets/icon/home_icon.svg?react';
import Calender from '../assets/icon/calender_icon.svg?react';
import Book from '../assets/icon/book_icon.svg?react';
import Movie from '../assets/icon/movie_icon.svg?react';
import Memo from '../assets/icon/memo_icon.svg?react';
import Logout from '../assets/icon/logout_icon.svg?react';
import { path } from '../Router';

const SideBarContainer = styled.nav`
    width: 250px;
    height: 100%;
    padding: 4rem 1.5rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    border: 1.5px solid ${props => props.theme.black};
    border-radius: 20px;
    gap: 1.25rem;
`;

const ProfileContainer = styled(Link)`
    padding: 1rem;
    border: 1.5px solid ${props => props.theme.black};
    border-radius: 20px;
    margin-bottom: 1.75rem;
    display: flex;
    justify-content: center;
    align-items: center;
    text-decoration: none;
`;

const AvatarContainer = styled.div`
    width: 3rem;
    height: 3rem;
    border: 1px solid black;
    border-radius: 50%;
`;

const UserInfo = styled.div`
    margin-left: 0.75rem;
    width: 5.5rem;
`;

const UserName = styled.p`
    color: ${props => props.theme.black};
    font-weight: 700;
`;

const WelcomeStr = styled.p`
    color: gray;
    font-size: 0.75rem;
    overflow-wrap: wrap;
`;

const NavButtonContainer = styled.div`
    border-radius: 10px;
    &:hover {
        box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
    }
`;

const NavLinkButton = styled(NavLink)`
    width: 100%;
    padding: 0.75rem 2rem;
    border: 1.5px solid white;
    border-radius: 10px;
    display: flex;
    align-items: center;
    text-decoration: none;
    &.active {
        border: 1.5px solid ${props => props.theme.black};
        background-color: ${props => props.theme.yellow};
    }
`;

const LogOutContainer = styled(NavLinkButton)`
    margin-top: 2rem;
    border: 1.5px solid ${props => props.theme.black};
    border-radius: 30px;
    background-color: ${props => props.theme.red};
`;

const NavStr = styled.div`
    margin-left: 1.5rem;
    color: ${props => props.theme.black};
    font-weight: 500;
`;

const LogOutStr = styled(NavStr)`
    color: white;
`;

export default function Sidebar() {
    return (
        <SideBarContainer>
            <ProfileContainer to={path.PROFILE}>
                <AvatarContainer></AvatarContainer>
                <UserInfo>
                    <UserName>유하님💕</UserName>
                    <WelcomeStr>오늘도 화이팅!</WelcomeStr>
                </UserInfo>
            </ProfileContainer>
            <NavButtonContainer>
                <NavLinkButton to={path.HOME}>
                    <Home />
                    <NavStr>Home</NavStr>
                </NavLinkButton>
            </NavButtonContainer>
            <NavButtonContainer>
                <NavLinkButton to={path.CALENDER}>
                    <Calender />
                    <NavStr>Calender</NavStr>
                </NavLinkButton>
            </NavButtonContainer>
            <NavButtonContainer>
                <NavLinkButton to={path.BOOK}>
                    <Book />
                    <NavStr>Book</NavStr>
                </NavLinkButton>
            </NavButtonContainer>
            <NavButtonContainer>
                <NavLinkButton to={path.MOVIE}>
                    <Movie />
                    <NavStr>Movie</NavStr>
                </NavLinkButton>
            </NavButtonContainer>
            <NavButtonContainer>
                <NavLinkButton to={path.MEMO}>
                    <Memo />
                    <NavStr>Memo</NavStr>
                </NavLinkButton>
            </NavButtonContainer>
            <LogOutContainer to={path.MAIN}>
                <Logout />
                <LogOutStr>Log out</LogOutStr>
            </LogOutContainer>
        </SideBarContainer>
    );
}
