
import React, { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthProvider';
import Loading from '../components/Shared/Loading';


const AdminRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext)

    if (loading) {
        return <Loading></Loading>
    }

    else if (user?.email === 'admin@gmail.com') {
        return children;
    }
    else {
        return <Navigate to='/404' > </Navigate>
    }

};

export default AdminRoute;