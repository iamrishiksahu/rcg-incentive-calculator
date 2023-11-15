import React from 'react'
import useAuth from '../customHooks/useAuth'
import { Navigate, Outlet, useLocation } from 'react-router-dom'
import Unauthorized from '../Components/UnAuthorized/Unauthorized'

const RequireAuth = ({ allowedRoles }) => {

    const { auth } = useAuth()
    const location = useLocation();


    return (
        auth?.roles?.find((e) => allowedRoles.includes(e))
            ? <Outlet />
            : auth?.email
                ? <Unauthorized />
                : <Navigate to='/' state={{ from: location }} replace />

    )
}

export default RequireAuth