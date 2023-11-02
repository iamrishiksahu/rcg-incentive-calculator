import './App.css';
import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Page404 from './Components/Page404/Page404';
import { createTheme, ThemeProvider } from '@mui/material';
import Window2 from './Components/Window2/Window2';
import Login5 from './Components/Login/Login5';
import Dashboard from './Components/Dashboard/Dashboard';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import { LightTheme } from './Utils/LightTheme';

function App() {

  const [theme, setTheme] = useState(LightTheme);

  return (
    <ThemeProvider theme={theme}>
      <LocalizationProvider dateAdapter={AdapterDayjs}>

        <BrowserRouter>

          <Routes>

            <Route path='/'>
              <Route index element={<Login5 />} />
              <Route path='second' element={<Window2 />} />
              <Route path='/dashboard/*' element={<Dashboard />} />
              {/* <Route path='add-candidate' element={<Dashboard />} /> */}
            </Route>

            <Route path='*' element={<Page404 />} />

          </Routes>
        </BrowserRouter>
      </LocalizationProvider>
    </ThemeProvider>
  );
}

export default App;
