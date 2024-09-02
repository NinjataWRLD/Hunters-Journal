import App from '../App';
import HomePage from '../Pages/home/Home';
import CreatePage from '../Pages/monsters/create/Create';
import EditPage from '../Pages/monsters/edit/Edit';
import ReadPage from '../Pages/monsters/read/Read';
import DeletePage from '../Pages/monsters/delete/Delete';
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
            path: '/humans/create',
            element: <HumanCreate />
        }
    ]
}];
