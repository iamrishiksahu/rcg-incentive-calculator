import './App.css';
import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Login2 from './Components/Login/Login2';
import Page404 from './Components/Page404/Page404';
import { createTheme, ThemeProvider } from '@mui/material';

function App() {

  const lightTheme = createTheme({
    typography: {
      fontFamily: 'Poppins, sans-serif',
    },
  });


  const [theme, setTheme] = useState(lightTheme);

  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>

        <Routes>

          <Route path='/'>
            <Route index element={<Login2 />} />
          </Route>

          <Route path='*' element={<Page404 />} />

        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
