import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import MainPage from './pages/MainPage';
import DiaryPage from './pages/DiaryPage';
import TodoPage from './pages/TodoPage';
import SignInPage from './pages/SignInPage';
import SignUpPage from './pages/SignUpPage';
import HomePage from './pages/HomePage';
import MemoPage from './pages/MemoPage';
import ProfilePage from './pages/ProfilePage';
import MainLayout from './layout/MainLayout';
import CulturePage from './pages/CulturePage';

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
        element: <MainLayout />,
        children: [
            {
                path: '/',
                element: <HomePage />,
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
						{
							path: '/culture',
							element: <CulturePage />,
					},
						{
							path: '/profile',
							element: <ProfilePage />,
					},
        ],
    },
    
    {
        path: '*',
        element: <div>Not Found</div>,
    },
]);

export default function Router() {
    return <RouterProvider router={router} />;
}
