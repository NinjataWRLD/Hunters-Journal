import App from '../App';
import HomePage from '../Pages/home/Home';
import CreatePage from '../Pages/create/Create';
import EditPage from '../Pages/edit/Edit';
import ReadPage from '../Pages/read/Read';
import DeletePage from '../Pages/delete/Delete';
import HumansPage from '../Pages/humans/browse/humans';
import HumanCreate from '../Pages/humans/create/CreateHuman'

export default [{
    path: '/',
    element: <App />,
    children: [
        {
            path: '/',
            element: <HomePage />
        },
        {
            path: '/create',
            element: <CreatePage />
        },
        {
            path: '/edit/:id',
            element: <EditPage />
        },
        {
            path: '/browse',
            element: <ReadPage />
        },
        {
            path: '/delete',
            element: <DeletePage />
        },
        {
            path: '/humans',
            element: <HumansPage />
        },
        {
            path: '/create-human',
            element: <HumanCreate />
        }
    ]
}];
