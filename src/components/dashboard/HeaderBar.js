import * as React from 'react';
import { styled, createTheme, ThemeProvider } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import { useNavigate } from 'react-router-dom';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';

const drawerWidth = 240;

const AppBar = styled(MuiAppBar, {
    shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    ...(open && {
        marginLeft: drawerWidth,
        width: `calc(100% - ${drawerWidth}px)`,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    }),
}));

const theme = createTheme({
    palette: {
        secondary: {
            main: '#ffffff',
        },
        info: {
            main: '#FA3E3E',
        }
    },
    typography: {
        fontFamily: [
            'Outfit',
        ].join(','),
    }
});

export default function HeaderBar() {

    let x;

    if (window.location.href.includes('trainings')) {
        x = 1;
    } else if (window.location.href.includes('highlights')) {
        x = 2;
    } else {
        x = 0;
    }

    const [value, setValue] = React.useState(x);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    let navigate = useNavigate();

    const routeCases = () => {
        let path = '/';
        navigate(path);
    };

    const routeTrainings = () => {
        let path = '/trainings';
        navigate(path);
    };

    const routeHighlights = () => {
        let path = '/highlights';
        navigate(path);
    };

    return (
        <ThemeProvider theme={theme}>
            <Box sx={{ flexGrow: 1 }}>
                <AppBar position="fixed" elevation={0}>
                    <Toolbar sx={{ backgroundColor: '#8294C4' }}>
                        <Box sx={{ borderBottom: 1, borderColor: '#8294C4', width: '100%' }}>
                            <Tabs
                                value={value}
                                onChange={handleChange}
                                textColor="secondary"
                                indicatorColor="none"
                                variant="fullWidth"
                                centered
                                sx={{ borderColor: 'none' }}
                            >
                                <Tab
                                    label="CASE OVERVIEW"
                                    sx={{ fontSize: 16, color: '#DBDFEA', textTransform: 'none', maxWidth: '15%', fontWeight: '600' }}
                                    onClick={routeCases}
                                />
                                <Tab
                                    label="RECENT TRAININGS"
                                    sx={{ fontSize: 16, color: '#DBDFEA', textTransform: 'none', maxWidth: '15%', fontWeight: '600' }}
                                    onClick={routeTrainings}
                                />
                                <Tab
                                    label="HIGHLIGHTS"
                                    sx={{ fontSize: 16, color: '#DBDFEA', textTransform: 'none', maxWidth: '15%', fontWeight: '600' }}
                                    onClick={routeHighlights}
                                />
                            </Tabs>
                        </Box>
                    </Toolbar>
                </AppBar>
            </Box>
        </ThemeProvider>
    );
}