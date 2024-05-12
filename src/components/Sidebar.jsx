import { Link } from 'react-router-dom';
import './Sidebar.css';

export default function Sidebar() {
    return (
        <div className="sidebar_container">
            <div>Calender</div>
            <nav className="sidebar_nav">
                <Link to="/">
                    <button className="sidebar_nav_btn">ALL</button>
                </Link>
                <Link to="/diary">
                    <button className="sidebar_nav_btn">DIARY</button>
                </Link>
                <Link to="/todo">
                    <button className="sidebar_nav_btn">TODO</button>
                </Link>
                <Link to="/culture">
                    <button className="sidebar_nav_btn">CULTURE</button>
                </Link>
                <Link to="/memo">
                    <button className="sidebar_nav_btn">MEMO</button>
                </Link>
            </nav>
            <Link to="/create">
                <button className='add_btn'>+</button>
            </Link>
        </div>
    );
}
