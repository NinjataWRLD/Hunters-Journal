import App from '../App';
import HomePage from '../Pages/home/Home';
import ContactPage from '../Pages/contact/Contact';

export default [{
    path: '/',
    element: <App />,
    children: [
        {
            path: '/',
            element: <HomePage />
        },
        {
            path: '/contact',
            element: <ContactPage />
        }
    ]
}];
