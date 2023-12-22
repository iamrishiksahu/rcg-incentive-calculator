import React, { useEffect, useState } from 'react'
import './CollapsableSideNav.css'
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { Accordion, AccordionSummary, AccordionDetails, Typography, Box } from '@mui/material';
import useAuth from '../../customHooks/useAuth';

const adminMenuItems = [
    {
        icon_url: '/images/side-nav/dashboard.png',
        nav_item_name: 'Dashboard',
        endpoint: ''
    },
    {
        icon_url: '/images/side-nav/add-candidate.png',
        nav_item_name: 'Add Candidate',
        endpoint: 'add-candidate'
    },
    {
        icon_url: '/images/side-nav/dashboard.png',
        nav_item_name: 'Assignment Dashboard',
        endpoint: 'assignments'
    },
    {
        icon_url: '/images/side-nav/approve-timesheet.png',
        nav_item_name: 'Approve Timesheet',
        endpoint: 'approve-timesheet'
    },
    {
        icon_url: '/images/side-nav/login-hrms.png',
        nav_item_name: 'Login to HRMS',
        endpoint: 'https://rapidtech.keka.com/#/home/dashboard'
    },
    {
        icon_url: '/images/side-nav/log-out.png',
        nav_item_name: 'Sign Out',
        endpoint: 'sign-out'
    },
]

const employeeMenuItems = [
    {
        icon_url: '/images/side-nav/dashboard.png',
        nav_item_name: 'Dashboard',
        endpoint: ''
    },
    {
        icon_url: '/images/side-nav/submit-timesheet.png',
        nav_item_name: 'My Timesheet',
        endpoint: 'my-timesheet'
    },
    {
        icon_url: '/images/side-nav/login-hrms.png',
        nav_item_name: 'Login to HRMS',
        endpoint: 'https://rapidtech.keka.com/#/home/dashboard'
    },
    {
        icon_url: '/images/side-nav/log-out.png',
        nav_item_name: 'Sign Out',
        endpoint: 'sign-out'
    },
]

const allMenuItems = [
    {
        icon_url: '/images/side-nav/dashboard.png',
        nav_item_name: 'Dashboard',
        endpoint: ''
    },
    {
        icon_url: '/images/side-nav/add-candidate.png',
        nav_item_name: 'Add Candidate',
        endpoint: 'add-candidate'
    },
    {
        icon_url: '/images/side-nav/dashboard.png',
        nav_item_name: 'Assignment Dashboard',
        endpoint: 'assignments'
    },
    {
        icon_url: '/images/side-nav/submit-timesheet.png',
        nav_item_name: 'My Timesheet',
        endpoint: 'my-timesheet'
    },
    {
        icon_url: '/images/side-nav/approve-timesheet.png',
        nav_item_name: 'Approve Timesheet',
        endpoint: 'approve-timesheet'
    },
    {
        icon_url: '/images/side-nav/login-hrms.png',
        nav_item_name: 'Login to HRMS',
        endpoint: 'https://rapidtech.keka.com/#/home/dashboard'
    },
    {
        icon_url: '/images/side-nav/log-out.png',
        nav_item_name: 'Sign Out',
        endpoint: 'sign-out'
    },
]
const CollapsableSideNav = ({ setTitle }) => {

    const [isCollapsed, setIsCollapsed] = useState(false);
    const [menuItems, setMenuItems] = useState(adminMenuItems)
    const { auth } = useAuth()


    useEffect(() => {

        if (auth?.role == 'Employee') {
            setMenuItems(employeeMenuItems)
        } else if(['HR', 'Manager', 'Finance', 'Admin'].includes(auth?.role)) {
            // For all other roles
            setMenuItems(adminMenuItems)
        }else{
            //for testing only. Must be removed in production
            setMenuItems(allMenuItems)
        }

    }, [])

    return (
        <aside>
            <header>

                <img width='120px' src="/images/rapid-consulting-logo.png" alt="company_logo" />
                {/* <img onClick={() => setIsCollapsed(prev => !prev)} width='21px' src='/images/side-nav/circle-1.svg' alt="circle_1" /> */}

            </header>

            <ul className="menu">

                {menuItems.map((item, idx) => {
                    return (
                        <NavLink key={idx} to={item.endpoint}>
                            <img width='21px' src={item.icon_url} alt="circle_1" />
                            {!isCollapsed && <span>{item.nav_item_name}</span>}
                        </NavLink>


                    )
                })}
            </ul>

        </aside >
    )
}

export default CollapsableSideNav