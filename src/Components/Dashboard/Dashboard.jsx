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
import { PageTitleProvider } from '../../context/PageTitleProvider'
import { Navigate } from 'react-router-dom'
import ApproveTimesheet from '../Timesheets/ApproveTimesheet/ApproveTimesheet'
import SingleTimesheetApproval from '../Timesheets/ApproveTimesheet/SingleTimesheetApproval'
import EmployeeDashboard from './EmployeeDashboard'
import MyProfile from '../user/MyProfile/MyProfile'
import useAuth from '../../customHooks/useAuth'
const Dashboard = () => {

  const [title, setTitle] = useState('Dashboard')
  const { auth } = useAuth()

  const rolesForMainDashboard = ['Admin', 'HR', 'Finance', 'Manager']

  const RenderRoleBasedDashboard = () => (
    <>
      {
        rolesForMainDashboard.includes(auth.user_role) ?
          < MainDashboard />
          :
          <EmployeeDashboard />
      }
    </>
  )



  return (
    <div>

      <CollapsableSideNav setTitle={setTitle} />

      <main style={{
        marginLeft: '16.5rem',
        maxWidth: 'calc(100vw - 16.5rem)',
        backgroundColor: 'var(--color-main-bg)',
        minHeight: '100vh',
      }}>

        <PageTitleProvider>

          <DashboardTopBar />

          <Routes>
            <Route path='/' element={<RenderRoleBasedDashboard />} />
            <Route path='/add-candidate' element={<AddCandidate />} />
            <Route path='/assignments' element={<AssignmentDashboard />} />
            <Route path='/my-profile/*' element={<MyProfile />} />
            <Route path='/add-assignment/:id' element={<AddAssignment />} />
            <Route path='/generate-invoice' element={<Login5 />} />
            <Route path='/submit-timesheet' element={<Login5 />} />
            <Route path='/approve-timesheet' element={<ApproveTimesheet />} />
            <Route path='/approve-timesheet/:candidate_id/:week_ending' element={<SingleTimesheetApproval />} />
            <Route path='/my-timesheet' element={<MyTimeSheet />} />
            <Route path='/sign-out' element={<Navigate to='/' />} />

          </Routes>

        </PageTitleProvider>

      </main>

    </div>
  )
}

export default Dashboard