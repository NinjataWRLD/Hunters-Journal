import App from '@/App';
import HomePage from '@/pages/home/Home';
import humans from './humans';
import monsters from './monsters';
import Http404 from '../errors/Http404'; 

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
        {
            path:'*',
            element: <Http404 />
        }
    ]
}];
