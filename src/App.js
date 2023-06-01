import React from 'react';
import { QueryClient, QueryClientProvider } from 'react-query'
import Typography from '@mui/material/Typography';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';

import './App.css';

import HomeTabs from './components/HomeTabs/HomeTabs.component';

const App = () => {
  const theme = useTheme();
  const matchesSM = useMediaQuery(theme.breakpoints.down('sm'));
  const matchesXS = useMediaQuery(theme.breakpoints.down('xs'));

  const fontSize = matchesXS ? '2rem' : matchesSM ? '3rem' : '4rem';

  const queryClient = new QueryClient();

  return (
    <div className="App">
    <Typography
      variant="h1"
      component="h1"
      style={{
        fontFamily: 'Inknut Antiqua',
        textAlign: 'center',
        color: '#1795A8',
        fontSize: fontSize,
        paddingTop: "10px"
      }}>
      Los Gringos - MRSL
    </Typography>
    <QueryClientProvider client={queryClient}>
      <HomeTabs />
    </QueryClientProvider>
    </div>
  );
}

export default App;
