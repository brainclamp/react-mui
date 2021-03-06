import React, { useState, useEffect } from 'react';
// import CssBaseline from '@material-ui/core/CssBaseline';
import ScopedCssBaseline from '@material-ui/core/ScopedCssBaseline';
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
// import TypographyTest from './test/typography';
// import ViewportTest from './test/viewport;
// import LayoutTest from './test/layout/Layout';
import ReCaptchaTest from './test/recaptcha';

const App = () => {
  const theme = createMuiTheme();

  const [state, setState] = useState({ gRecaptcha: '' });

  const handleRecaptcha = value => {
    console.log('handling ReCaptcha change');
    setState({ gRecaptcha: value });
  };

  useEffect(() => {
    console.log('Recaptcha data recieved - ', state.gRecaptcha);
  }, [state.gRecaptcha]);

  return (

    <MuiThemeProvider theme={theme}>
      <ScopedCssBaseline>

        <Box m={1}>
          <ReCaptchaTest />

          {/*
            // <TypographyTest />
            // <LayoutTest />
            // <ViewportTest />
          */}
        </Box>

      </ScopedCssBaseline>
    </MuiThemeProvider>

  );
};

App.displayName = 'theApp';
export default App;
