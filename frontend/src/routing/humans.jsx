import ReadPage from '@/pages/humans/read/ReadHumans';
import CreatePage from '@/pages/humans/create/CreateHuman';

export default [
    {
        path: '/humans',
        element: <ReadPage />
    },
    {
        path: '/humans/new',
        element: <CreatePage />
    },
];