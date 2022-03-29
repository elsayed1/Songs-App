import { Provider } from 'react-redux';

import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Grid } from '@mui/material';
import HorizontalLinearStepper from './components/Stepper';

import Singers from './components/Stepper/Singers';
import store from './store';
import Albums from './components/Stepper/Albums';
import Summary from './components/Summary';
import Songs from './components/Stepper/Songs';

import './App.css';
import Form from './components/Stepper/Form';

const theme = createTheme({
  palette: {
    secondary: { main: '#80DEEA' }
  }
});

const steps = [
  { label: 'Select Singers', component: Singers },
  { label: ' Select Albums', component: Albums },
  { label: 'Select Songs', component: Songs },
  { label: 'Submit Request', component: Form }
];

function App() {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <div className="App">
          <Grid container spacing={2} alignItems="center">
            <Grid item xs={8}>
              <HorizontalLinearStepper steps={steps} />
            </Grid>
            <Grid item xs={4}>
              <Summary />
            </Grid>
          </Grid>
        </div>
      </ThemeProvider>
    </Provider>
  );
}

export default App;
