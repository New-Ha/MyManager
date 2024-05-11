import { Outlet } from 'react-router-dom';
import Sidebar from '../components/Sidebar';
import Header from '../components/Header';
import './MainLayout.css'

export default function MainLayout() {
    return (
        <div className='main_container'>
            <section className='sidebar_nav_btn'>
                <Sidebar />
            </section>
            <section className='content_section'>
                <Header />
                <Outlet />
            </section>
        </div>
    );
}
