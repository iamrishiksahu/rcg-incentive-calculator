import React, { useState } from 'react'
import CollapsableSideNav from '../CollapsableSideNav/CollapsableSideNav'
import { Routes, Route } from 'react-router-dom'
import Login from '../Login/Login'
import Login2 from '../Login/Login2'
import Test from '../Test'
import AddCandidate from '../AddCandidate/AddCandidate'
import DashboardTopBar from '../TopBar/DashboardTopBar'
import MainDashboard from './MainDashboard'
import AddAssignment from '../AddAssignment/AddAssignment'

const Dashboard = () => {

  const [title, setTitle] = useState('Dashboard');
  return (
    <div>

      <CollapsableSideNav setTitle={setTitle} />

      <main style={{
        marginLeft: '18rem',
        maxWidth: 'calc(100vw - 18rem)',
        backgroundColor: 'var(--color-main-bg)',
        minHeight: '100vh',
      }}>

        <DashboardTopBar title={title}/>

        <Routes>
          <Route path='/' element={<MainDashboard />} />
          <Route path='/approve-timesheete' element={<Test />} />
          <Route path='/add-candidate' element={<AddCandidate />} />
          <Route path='/add-assignment' element={<AddAssignment />} />
          <Route path='/generate-invoice' element={<Login />} />
          <Route path='/submit-timesheet' element={<Login />} />
          <Route path='/hrms' element={<Login />} />
        </Routes>

      </main>

    </div>
  )
}

export default Dashboard