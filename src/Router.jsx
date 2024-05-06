import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import MainPage from './pages/MainPage';
import LayoutTemplate from './template/LayoutTemplate';
import DiaryPage from './pages/DiaryPage';
import TodoPage from './pages/TodoPage';
import SignInPage from './pages/SignInPage';
import SignUpPage from './pages/SignUpPage';
import ManagePage from './pages/ManagePage';
import HomePage from './pages/HomePage';
import MemoPage from './pages/MemoPage';
import ProfilePage from './pages/ProfilePage';

const router = createBrowserRouter([
    {
        path: '/main',
        element: <MainPage />,
    },
    {
        path: '/sign',
        children: [
            {
                path: 'in',
                element: <SignInPage />,
            },
            {
                path: 'up',
                element: <SignUpPage />,
            },
        ],
    },
    {
        element: <LayoutTemplate />,
        children: [
            {
                path: '/',
                element: <HomePage />,
            },
            {
                path: '/Manage',
                element: <ManagePage />,
            },
            {
                path: '/diary',
                element: <DiaryPage />,
            },
            {
                path: '/todo',
                element: <TodoPage />,
            },
            {
                path: '/memo',
                element: <MemoPage />,
            },
        ],
    },
    {
        path: '/profile',
        element: <ProfilePage />,
    },
    {
        path: '*',
        element: <div>Not Found</div>,
    },
]);

export default function Router() {
    return <RouterProvider router={router} />;
}
