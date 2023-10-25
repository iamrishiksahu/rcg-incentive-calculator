import React, { useState } from 'react'
import './CollapsableSideNav.css'

const menuItems = [
    {
        icon_url: '/images/side-nav/circle-1.svg',
        nav_item_name: 'Dashboard'
    },
    {
        icon_url: '/images/side-nav/circle-1.svg',
        nav_item_name: 'Approve Timesheet'
    },
    {
        icon_url: '/images/side-nav/circle-1.svg',
        nav_item_name: 'Add Candidate'
    },
    {
        icon_url: '/images/side-nav/circle-1.svg',
        nav_item_name: 'Job Assignment'
    },
    {
        icon_url: '/images/side-nav/circle-1.svg',
        nav_item_name: 'Generate Invoice'
    },
    {
        icon_url: '/images/side-nav/circle-1.svg',
        nav_item_name: 'Submit Timesheet'
    },
    {
        icon_url: '/images/side-nav/circle-1.svg',
        nav_item_name: 'Login to HRMS'
    },
    {
        icon_url: '/images/side-nav/circle-1.svg',
        nav_item_name: 'Sign Out'
    },
]

const CollapsableSideNav = () => {

    const [isCollapsed, setIsCollapsed] = useState(false);

    return (
        <aside>
            <header>

                <img width='120px' src="/images/rapid-consulting-logo.png" alt="company_logo" />
                <img onClick={() => setIsCollapsed(prev => !prev)} width='32px' src='/images/side-nav/circle-1.svg' alt="circle_1" />

            </header>

            <ul className="menu">

                {menuItems.map((item, idx) => {
                    return (
                        <li key={idx}>
                            <img width='32px' src={item.icon_url} alt="circle_1" />
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