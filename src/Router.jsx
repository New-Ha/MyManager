import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import MainPage from './pages/MainPage';
import DiaryPage from './pages/DiaryPage';
import SignInPage from './pages/SignInPage';
import SignUpPage from './pages/SignUpPage';
import HomePage from './pages/HomePage';
import MemoPage from './pages/MemoPage';
import ProfilePage from './pages/ProfilePage';
import MainLayout from './layout/MainLayout';
import MoviesPage from './pages/MoviesPage';
import BooksPage from './pages/BooksPage';

const path = {
    MAIN: '/main',
    SIGN: '/sign',
    SIGNIN: 'in',
    SIGNUP: 'up',
    HOME: '/',
    CALENDER: '/calender',
    BOOK: '/book',
    MOVIE: '/movie',
    MEMO: '/memo',
    PROFILE: '/profile',
};

const router = createBrowserRouter([
    {
        path: path.MAIN,
        element: <MainPage />,
    },
    {
        path: path.SIGN,
        children: [
            {
                path: path.SIGNIN,
                element: <SignInPage />,
            },
            {
                path: path.SIGNUP,
                element: <SignUpPage />,
            },
        ],
    },
    {
        element: <MainLayout />,
        children: [
            {
                path: path.HOME,
                element: <HomePage />,
            },
            {
                path: path.CALENDER,
                element: <DiaryPage />,
            },
            {
                path: path.BOOK,
                element: <BooksPage />,
            },
            {
                path: path.MOVIE,
                element: <MoviesPage />,
            },
            {
                path: path.MEMO,
                element: <MemoPage />,
            },
            {
                path: path.PROFILE,
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
