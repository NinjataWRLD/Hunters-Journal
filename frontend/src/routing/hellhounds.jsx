import ReadPage from '../pages/monsters/read/ReadMonsters';
import CreatePage from '../pages/monsters/create/CreateMonster';
import EditPage from '@/pages/monsters/edit/EditMonster';

export default [
    {
        path: '/monsters',
        element: <ReadPage />
    },
    {
        path: '/monsters/new',
        element: <CreatePage />
    },
    {
        path: '/edit/:id',
        element: <EditPage />
    },    
];