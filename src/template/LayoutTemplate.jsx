import { Outlet } from 'react-router-dom';
import Sidebar from '../components/Sidebar';

export default function LayoutTemplate() {
    return (
        <>
            <Sidebar />
            <Outlet />
        </>
    );
}
