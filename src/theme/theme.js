import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#000000',
    },
    error: {
      main: '#EF4444', // Red color from the design
    },
  },
  typography: {
    h2: {
      fontSize: '3.5rem',
      '@media (max-width:600px)': {
        fontSize: '2.5rem',
      },
    },
    h3: {
      fontSize: '2.5rem',
      '@media (max-width:600px)': {
        fontSize: '2rem',
      },
    },
  },
});

export default theme; 