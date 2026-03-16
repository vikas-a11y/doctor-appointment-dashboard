import {Navigate} from 'react-router-dom';

const ProtectedRoute = ({children}) => {
    const isLoggedIn = localStorage.getItem('isLoggedIn'); // Check if token exists in localStorage

    if (!isLoggedIn) {
        return <Navigate to="/" />; // Redirect to login page if not logged in
    }

    return children; // Render the protected component if logged in
};

export default ProtectedRoute;