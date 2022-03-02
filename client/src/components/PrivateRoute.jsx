import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

function PrivateRoute ({children, redirectTo}) {
    const auth = useSelector(state => state.auth)

    return auth ? children : <Navigate to={redirectTo}/>
}

export default PrivateRoute