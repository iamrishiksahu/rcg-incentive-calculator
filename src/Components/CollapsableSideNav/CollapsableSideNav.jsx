import React, { useState } from 'react'
import './CollapsableSideNav.css'
import { Link, useNavigate } from 'react-router-dom';

const menuItems = [
    {
        icon_url: '/images/side-nav/dashboard.png',
        nav_item_name: 'Dashboard',
        endpoint: ''
    },
    {
        icon_url: '/images/side-nav/approve-timesheet.png',
        nav_item_name: 'Approve Timesheet',
        endpoint: 'approve-timesheet'
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
    {
        icon_url: '/images/side-nav/generate-invoice.png',
        nav_item_name: 'Generate Invoice',
        endpoint: 'generate-invoice'
    },
    {
        icon_url: '/images/side-nav/submit-timesheet.png',
        nav_item_name: 'Submit Timesheet',
        endpoint: 'submit-timesheet'
    },
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

                {menuItems.map((item, idx) => {
                    return (
                        <li key={idx} onClick={() => {
                            navigate(`${item.endpoint}`)
                            setTitle(item.nav_item_name)
                        }}>
                            <img width='21px' src={item.icon_url} alt="circle_1" />
                            {!isCollapsed && <span>{item.nav_item_name}</span>}
                        </li>
                    )
                })}

                {/* Mumtaz */}

            </ul>

        </aside>
    )
}

export default CollapsableSideNav