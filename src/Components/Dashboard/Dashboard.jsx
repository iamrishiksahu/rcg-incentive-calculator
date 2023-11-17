import React, { useState } from 'react'
import CollapsableSideNav from '../CollapsableSideNav/CollapsableSideNav'
import { Routes, Route } from 'react-router-dom'
import Test from '../Test'
import AddCandidate from '../AddCandidate/AddCandidate'
import DashboardTopBar from '../TopBar/DashboardTopBar'
import MainDashboard from './MainDashboard'
import AddAssignment from '../AddAssignment/AddAssignment'
import AssignmentDashboard from '../Assignments/AssignmentDashboard'
import Login5 from '../Auth/Login/Login5'
import MyTimeSheet from '../Timesheets/MyTimesheet/MyTimeSheet'
const Dashboard = () => {

  const [title, setTitle] = useState('Dashboard')
  
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
          <Route path='/assignments' element={<AssignmentDashboard />} />
          <Route path='/add-assignment/:id' element={<AddAssignment />} />
          <Route path='/generate-invoice' element={<Login5 />} />
          <Route path='/submit-timesheet' element={<Login5 />} />
          <Route path='/my-timesheet' element={<MyTimeSheet />} />
          <Route path='/hrms' element={<Login5 />} />
        </Routes>

      </main>

    </div>
  )
}

export default Dashboard