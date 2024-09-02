import App from '@/App';
import HomePage from '@/pages/home/Home';
import humans from './humans';
import hellhounds from './hellhounds';

export default [{
    path: '/',
    element: <App />,
    children: [
        {
            path: '/',
            element: <HomePage />
        },
        ...humans,
        ...hellhounds,
    ]
}];
