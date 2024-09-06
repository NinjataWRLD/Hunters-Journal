import ReadPage from '@/pages/humans/read/ReadHumans';
import CreatePage from '@/pages/humans/create/CreateHuman';
import ReadHuman from '../pages/humans/read/components/ReadHuman';

export default [
    {
        path: '/humans',
        element: <ReadPage />
    },
    {
        path: '/humans/new',
        element: <CreatePage />
    },
    {
        path: '/humans/:id',
        element: <ReadHuman />
    }
];