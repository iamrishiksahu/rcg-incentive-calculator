import React, { useState } from 'react'
import CollapsableSideNav from '../CollapsableSideNav/CollapsableSideNav'
import { Routes, Route } from 'react-router-dom'
import Login from '../Login/Login'
import Login2 from '../Login/Login2'
import Test from '../Test'
import AddCandidate from '../AddCandidate/AddCandidate'
import DashboardTopBar from '../TopBar/DashboardTopBar'

const Dashboard = () => {

  const [title, setTitle] = useState('Dashboard');
  return (
    <div>

      <CollapsableSideNav setTitle={setTitle} />

      <main style={{
        marginLeft: '18rem',
        width: 'calc(100vw - 18rem)',
        backgroundColor: 'var(--color-main-bg)',
        height: '100vh',
      }}>

        <DashboardTopBar title={title}/>

        <Routes>
          <Route path='/' element={<Login2 />} />
          <Route path='/approve-timesheete' element={<Test />} />
          <Route path='/add-candidate' element={<AddCandidate />} />
          <Route path='/add-assignment' element={<Login />} />
          <Route path='/generate-invoice' element={<Login />} />
          <Route path='/submit-timesheet' element={<Login />} />
          <Route path='/hrms' element={<Login />} />
        </Routes>

      </main>

      <div >
      </div>



    </div>
  )
}

export default Dashboard