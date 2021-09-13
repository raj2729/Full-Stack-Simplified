import { createTheme, ThemeProvider } from '@material-ui/core';
import React from 'react'
import Home from './Home';

const theme = createTheme({
    palette: {
        primary: {
            main: '#809FFF'
        },
        secondary: {
            main: '#000000'
        },
        text: {
            primary: '#000000',
            secondary: '#FEFFFF'
        }
    }
})

function App() {
    return (
        <ThemeProvider theme={theme}>
            <Home />
        </ThemeProvider>
    );
}

export default App;