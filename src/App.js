import './App.css';
import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Page404 from './Components/Page404/Page404';
import { createTheme, ThemeProvider } from '@mui/material';
import Window2 from './Components/Window2/Window2';
import Login5 from './Components/Auth/Login/Login5';
import Dashboard from './Components/Dashboard/Dashboard';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import { LightTheme } from './Utils/LightTheme';
import NoInternetConnection from './Wrappers/NoInternet';
import { Provider } from 'react-redux';
import store from './app/store';
import RequireAuth from './Wrappers/RequireAuth';
import ForgotPassword from './Components/Auth/ForgotPassword/ForgotPassword';
import ResetPassword from './Components/Auth/ResetPassword/ResetPassword';


function App() {

  const [theme, setTheme] = useState(LightTheme);

  return (
    <ThemeProvider theme={theme}>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <NoInternetConnection>

          <Provider store={store}>

            <BrowserRouter>

              <Routes>

                <Route path='/'>
                  <Route index element={<Login5 />} />
                  <Route path='forgot-password' element={<ForgotPassword />} />
                  <Route path='reset_password/:uid/:token' element={<ResetPassword />} />
                  {/* <Route element={<RequireAuth allowedRoles={['Admin']} />} > */}
                    <Route path='/dashboard/*' element={<Dashboard />} />
                  {/* </Route> */}
                  {/* <Route path='add-candidate' element`={<Dashboard />} /> */}
                </Route>
                <Route path='*' element={<Page404 />} />
              </Routes>
            </BrowserRouter>
          </Provider>

        </NoInternetConnection>

      </LocalizationProvider>
    </ThemeProvider>
  );
}

export default App;
