import { Outlet } from 'react-router-dom';

export default function LayoutTemplate() {
    return (
        <>
            <div>LayoutTemplate</div>
            <Outlet />
        </>
    );
}
