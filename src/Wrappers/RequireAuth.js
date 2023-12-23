import React from 'react'
import useAuth from '../customHooks/useAuth'
import { Navigate, Outlet, useLocation } from 'react-router-dom'
import Unauthorized from '../Components/UnAuthorized/Unauthorized'
import { AllUserRoles } from '../Utils/constants'

const RequireAuth = ({ allowedRoles, allowAll }) => {

    const { auth } = useAuth()
    const location = useLocation();
    console.log(allowedRoles)
    console.log(auth?.user_role)

    if(allowAll){

        if(AllUserRoles.includes(auth.user_role)){
            console.log('ran')
            return (<Outlet />)
        }else{
            console.log('ran')

            return <Navigate to='/' state={{ from: location }} replace />
        }
    }else{
        if(allowedRoles.includes(auth.user_role)){
            console.log('ran')

            return ( <Outlet/> )
        }else if(auth.user_email){
            console.log('ran')

            return (<Unauthorized />)
        }else{
            console.log('ran')

            return (<Navigate to='/' state={{ from: location }} replace />)
        }
    }

    // return (
    //     allowAll
    //         ? AllUserRoles.includes(auth?.user_role)
    //             ? <Outlet />
    //             : <Navigate to='/' state={{ from: location }} replace />
    //         :
    //         allowedRoles.includes(auth?.user_role)
    //             ? <Outlet />
    //             : auth?.email
    //                 ? <Unauthorized />
    //                 : <Navigate to='/' state={{ from: location }} replace />

    // )
}

export default RequireAuth