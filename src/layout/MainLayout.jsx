import { Outlet } from 'react-router-dom';
import Sidebar from '../components/Sidebar';
import Header from '../components/Header';

export default function MainLayout() {
    return (
        <>
            <section>
                <Sidebar />
            </section>
            <section>
                <Header />
                <Outlet />
            </section>
        </>
    );
}
