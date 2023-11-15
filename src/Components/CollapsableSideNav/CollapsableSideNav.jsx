import React, { useState } from 'react'
import './CollapsableSideNav.css'
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { Accordion, AccordionSummary, AccordionDetails, Typography, Box } from '@mui/material';

const menuItems = [
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
        icon_url: '/images/side-nav/add-assignment.png',
        nav_item_name: 'Add Assignment',
        endpoint: 'add-assignment'
    },
    // {
    //     icon_url: '/images/side-nav/generate-invoice.png',
    //     nav_item_name: 'Generate Invoice',
    //     endpoint: 'generate-invoice'
    // },
    {
        icon_url: '/images/side-nav/submit-timesheet.png',
        nav_item_name: 'Submit Timesheet',
        endpoint: 'submit-timesheet'
    },
    // {
    //     icon_url: '/images/side-nav/approve-timesheet.png',
    //     nav_item_name: 'Approve Timesheet',
    //     endpoint: 'approve-timesheet'
    // },
    {
        icon_url: '/images/side-nav/login-hrms.png',
        nav_item_name: 'Login to HRMS',
        endpoint: 'hrms'
    },
    {
        icon_url: '/images/side-nav/log-out.png',
        nav_item_name: 'Sign Out',
        endpoint: 'sign-out'
    },
]

const CollapsableSideNav = ({ setTitle }) => {

    const navigate = useNavigate();

    const [isCollapsed, setIsCollapsed] = useState(false);

    return (
        <aside>
            <header>

                <img width='120px' src="/images/rapid-consulting-logo.png" alt="company_logo" />
                <img onClick={() => setIsCollapsed(prev => !prev)} width='21px' src='/images/side-nav/circle-1.svg' alt="circle_1" />

            </header>

            <ul className="menu">

                <NavLink to={menuItems[0].endpoint} >
                    <img width='21px' src={menuItems[0].icon_url} alt="circle_1" />
                    {!isCollapsed && <span>{menuItems[0].nav_item_name}</span>}
                </NavLink>

                <NavLink to={menuItems[1].endpoint} >
                    <img width='21px' src={menuItems[1].icon_url} alt="circle_1" />
                    {!isCollapsed && <span>{menuItems[1].nav_item_name}</span>}
                </NavLink>

                <NavLink to={menuItems[2].endpoint} >
                    <img width='21px' src={menuItems[2].icon_url} alt="circle_1" />
                    {!isCollapsed && <span>{menuItems[2].nav_item_name}</span>}
                </NavLink>

                <NavLink to={menuItems[3].endpoint} >
                    <img width='21px' src={menuItems[3].icon_url} alt="circle_1" />
                    {!isCollapsed && <span>{menuItems[3].nav_item_name}</span>}
                </NavLink>



                <NavLink to={menuItems[4].endpoint} >
                    <img width='21px' src={menuItems[4].icon_url} alt="circle_1" />
                    {!isCollapsed && <span>{menuItems[4].nav_item_name}</span>}
                </NavLink>

                <NavLink to={menuItems[5].endpoint} >
                    <img width='21px' src={menuItems[5].icon_url} alt="circle_1" />
                    {!isCollapsed && <span>{menuItems[5].nav_item_name}</span>}
                </NavLink>

                <NavLink to={menuItems[6].endpoint} >
                    <img width='21px' src={menuItems[6].icon_url} alt="circle_1" />
                    {!isCollapsed && <span>{menuItems[6].nav_item_name}</span>}
                </NavLink>

                <NavLink to={menuItems[6].endpoint} >
                    <img width='21px' src={menuItems[6].icon_url} alt="circle_1" />
                    {!isCollapsed && <span>{menuItems[6].nav_item_name}</span>}
                </NavLink>


          


            </ul>

        </aside >
    )
}

export default CollapsableSideNav