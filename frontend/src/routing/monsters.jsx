import ReadPage from '../pages/monsters/read/ReadMonsters';
import CreatePage from '../pages/monsters/create/CreateMonster';
import ReadMonster from '../pages/monsters/read/components/ReadMonster';

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
        path: '/monsters/:id',
        element: <ReadMonster />
    }
];