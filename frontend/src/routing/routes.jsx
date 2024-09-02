import App from '@/App';
import HomePage from '@/pages/home/Home';
import humans from './humans';
import monsters from './monsters';

export default [{
    path: '/',
    element: <App />,
    children: [
        {
            path: '/',
            element: <HomePage />
        },
        ...humans,
        ...monsters,
    ]
}];
