import ReadPage from '../pages/monsters/read/ReadMonsters';
import CreatePage from '../pages/monsters/create/CreateMonster';

export default [
    {
        path: '/monsters',
        element: <ReadPage />
    },
    {
        path: '/monsters/new',
        element: <CreatePage />
    },
];