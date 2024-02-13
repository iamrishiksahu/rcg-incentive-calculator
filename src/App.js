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
import NoInternetConnection from './Wrappers/NoInternet';
import { Provider } from 'react-redux';
import store from './app/store';
import RequireAuth from './Wrappers/RequireAuth';
import ForgotPassword from './Components/Auth/ForgotPassword/ForgotPassword';
import ResetPassword from './Components/Auth/ResetPassword/ResetPassword';
import { LightThemeBlue } from './Utils/themes/LightThemeBlue';
import { LightThemeRed } from './Utils/themes/LightThemeRed';
import RedirectButton from './RedirectButton';


function App() {

  const [theme, setTheme] = useState(LightThemeRed);

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
                  <Route element={<RequireAuth allowAll />} >
                    <Route path='/dashboard/*' element={<Dashboard />} />
                  </Route>
                  {/* <Route path='add-candidate' element`={<Dashboard />} /> */}
                </Route>
                <Route path="/login/oauth2/code/sso" Component={RedirectButton} />
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
