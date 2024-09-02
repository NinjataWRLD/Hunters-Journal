import ReadPage from '@/pages/humans/read/ReadHumans';
import CreatePage from '@/pages/humans/create/CreateHuman';
import EditPage from '@/pages/humans/edit/EditHuman';

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
        element: <EditPage />
    },
];