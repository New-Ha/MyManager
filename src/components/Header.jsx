import './Header.css';
import Avatar from '../assets/avatar.svg?react';

export default function Header() {
    return (
        <div className="header_container">
            <div className="select_day">5월 3일</div>
            <input type="text" className="search_bar" placeholder="검색어를 입력하세요" />
            <Avatar />
        </div>
    );
}
