import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Avatar from '@mui/material/Avatar';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import TaskAltIcon from '@mui/icons-material/TaskAlt';
import PendingIcon from '@mui/icons-material/Pending';
import SwipeableViews from 'react-swipeable-views';
import PropTypes from 'prop-types';
import { Divider } from '@mui/material';
import Resume from '../assets/SidharthMenonResume.pdf';
import avatar from '../assets/avatar.jpg';
import trainingIcon from '../assets/trainingIcon.png';
import trainingIcon2 from '../assets/trainingIcon2.png';
import trainingIcon3 from '../assets/trainingIcon3.png';
import trainingIcon4 from '../assets/trainingIcon4.png';
import { styled } from '@mui/material/styles';
import LinearProgress, { linearProgressClasses } from '@mui/material/LinearProgress';

const BorderLinearProgressEnd = styled(LinearProgress)(({ theme }) => ({
    height: 10,
    borderRadius: 5,
    [`&.${linearProgressClasses.colorPrimary}`]: {
        backgroundColor: theme.palette.grey[theme.palette.mode === 'light' ? 200 : 800],
    },
    [`& .${linearProgressClasses.bar}`]: {
        borderRadius: 5,
        backgroundColor: theme.palette.mode === 'light' ? '#00DFA2' : '#308fe8',
    },
}));

const BorderLinearProgressMiddle = styled(LinearProgress)(({ theme }) => ({
    height: 10,
    borderRadius: 5,
    [`&.${linearProgressClasses.colorPrimary}`]: {
        backgroundColor: theme.palette.grey[theme.palette.mode === 'light' ? 200 : 800],
    },
    [`& .${linearProgressClasses.bar}`]: {
        borderRadius: 5,
        backgroundColor: theme.palette.mode === 'light' ? '#1a90ff' : '#308fe8',
    },
}));

const BorderLinearProgressStart = styled(LinearProgress)(({ theme }) => ({
    height: 10,
    borderRadius: 5,
    [`&.${linearProgressClasses.colorPrimary}`]: {
        backgroundColor: theme.palette.grey[theme.palette.mode === 'light' ? 200 : 800],
    },
    [`& .${linearProgressClasses.bar}`]: {
        borderRadius: 5,
        backgroundColor: theme.palette.mode === 'light' ? '#F24C3D' : '#308fe8',
    },
}));

function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{ p: 3 }}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
};

function a11yProps(index) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}

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
    },
});

function createData(icon, name, description, date, duration, trainingLink, trainingLinkName) {
    return { icon, name, description, date, duration, trainingLink, trainingLinkName };
}

const trainings = [
    createData(trainingIcon, 'Legal Research & Legal Writing - A Paralegal Skills Course',
        'Fast & practical legal research, drafting, & communication class for paralegals, legal assistants, & law students.',
        '13-June-2023', '2 Weeks',
        'https://www.udemy.com/course/legal-research-legal-writing-paralegal-skills-course/',
        'Legal Research & Legal Writing'
    ),
    createData(trainingIcon2, 'Arbitration - Domestic & International',
        'Get trained to handle each step of arbitration proceedings including drafting of pleadings, oral hearings, etc.',
        '08-May-2023', '3 Weeks',
        'https://www.udemy.com/course/arbitration/',
        'Arbitration'
    ),
    createData(trainingIcon3, 'The complete course on the Indian Contract Act, 1872',
        'Law of Contract in India as under Indian Contract Act, 1872.',
        '10-April-2023', '1 Week',
        'https://www.udemy.com/course/law-of-contract-as-under-indian-contract-act-1872/',
        'Indian Contract Act, 1872'
    ),
    createData(trainingIcon4, 'Diploma Course in Labour Laws and Statutory Compliances',
        'Every HR and Entrepreneur should know - with FAQs',
        '24-February-2023', '2 Weeks',
        'https://www.udemy.com/course/labour-laws-and-statutory-compliances/',
        'Labour Laws & Compliances'
    ),
];

function createOngoingData(icon, name, description, progress, progressText, trainingLink, trainingLinkName) {
    return { icon, name, description, progress, progressText, trainingLink, trainingLinkName };
}

const ongoingTrainings = [
    createOngoingData(trainingIcon, 'Legal Research & Legal Writing - A Paralegal Skills Course',
        'Fast & practical legal research, drafting, & communication class for paralegals, legal assistants, & law students.',
        '50', '50%',
        'https://www.udemy.com/course/legal-research-legal-writing-paralegal-skills-course/',
        'Legal Research & Legal Writing'
    ),
    createOngoingData(trainingIcon2, 'Arbitration - Domestic & International',
        'Get trained to handle each step of arbitration proceedings including drafting of pleadings, oral hearings, etc.',
        '90', '90%',
        'https://www.udemy.com/course/arbitration/',
        'Arbitration'
    ),
    createOngoingData(trainingIcon3, 'The complete course on the Indian Contract Act, 1872',
        'Law of Contract in India as under Indian Contract Act, 1872.',
        '20', '20%',
        'https://www.udemy.com/course/law-of-contract-as-under-indian-contract-act-1872/',
        'Indian Contract Act, 1872'
    ),
];

export default function Trainings() {

    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const handleChangeIndex = (index) => {
        setValue(index);
    };

    React.useEffect(() => {
        console.log(ongoingTrainings);
    })

    return (
        <>
            <ThemeProvider theme={theme}>
                <Box
                    sx={{ flexGrow: 1, marginTop: '3%' }}
                >
                    <div style={{ backgroundColor: '#ACB1D6' }}>
                        <div style={{ marginLeft: '5%', display: 'flex', alignItems: 'center', paddingTop: '2%' }}>
                            <Avatar alt="Sidharth Menon" src={avatar} />
                            <Typography sx={{ fontWeight: 'bold', fontSize: '24px', marginLeft: '1%' }}>Sidharth Menon</Typography>
                        </div><br /><br />
                        <Grid container spacing={1} >
                            <Grid item xs={2} sx={{ marginLeft: '5%' }}>
                                <Typography sx={{ fontWeight: 'bold', fontSize: '16px', color: '#DBDFEA' }}>Completed Trainings</Typography>
                            </Grid>
                            <Grid item xs={2}>
                                <Typography sx={{ fontWeight: 'bold', fontSize: '16px', color: '#DBDFEA' }}>Ongoing Trainings</Typography>
                            </Grid>
                            <Grid item xs={2}>
                                <Typography sx={{ fontWeight: 'bold', fontSize: '16px', color: '#DBDFEA' }}>Certifications</Typography>
                            </Grid>
                        </Grid>
                        <Grid container spacing={1} >
                            <Grid item xs={2} sx={{ marginLeft: '5%', marginTop: '1%' }}>
                                <Typography sx={{ fontWeight: 'bold', fontSize: '24px' }}>{trainings.length}</Typography>
                            </Grid>
                            <Grid item xs={2} sx={{ marginTop: '1%' }}>
                                <Typography sx={{ fontWeight: 'bold', fontSize: '24px' }}>{ongoingTrainings.length}</Typography>
                            </Grid>
                            <Grid item xs={2} sx={{ marginTop: '1%' }}>
                                <Typography sx={{ fontWeight: 'bold', fontSize: '24px' }}>{trainings.length}</Typography>
                            </Grid>
                        </Grid>
                        <br /><br />
                    </div>
                    <br />
                    <Box sx={{ width: '90%' }}>
                        <Box sx={{ marginLeft: '5%' }}>
                            <Tabs
                                value={value}
                                onChange={handleChange}
                                sx={{ borderBottom: 1, borderColor: 'divider' }}
                            >
                                <Tab icon={<TaskAltIcon />} iconPosition="start" label="Completed" {...a11yProps(0)} />
                                <Tab icon={<PendingIcon />} iconPosition="start" label="Ongoing" {...a11yProps(1)} />
                            </Tabs>
                            <SwipeableViews
                                axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
                                index={value}
                                onChangeIndex={handleChangeIndex}
                            >
                                <TabPanel value={value} index={0} dir={theme.direction}>
                                    {trainings.map((training, key) => (
                                        <>
                                            <div style={{ display: 'flex' }}>
                                                <img src={training.icon} alt='courseIcon' style={{ borderRadius: '14px', height: '150px', width: '150px', marginTop: '3%' }}></img>
                                                <div style={{ width: '100%', marginLeft: '2%' }}>
                                                    <Typography sx={{ fontWeight: 'bold', fontSize: '18px', marginTop: '3%' }}>{training.name}</Typography>
                                                    <Typography sx={{ fontSize: '14px' }}>{training.description}</Typography>
                                                    <br />
                                                    <Divider />
                                                    <br />
                                                    <Grid container spacing={1} >
                                                        <Grid item xs={2}>
                                                            <Typography sx={{ fontWeight: 'bold', fontSize: '14px' }}>Date of Completion</Typography>
                                                        </Grid>
                                                        <Grid item xs={2}>
                                                            <Typography sx={{ fontWeight: 'bold', fontSize: '14px', marginLeft: '4%' }}>Duration</Typography>
                                                        </Grid>
                                                        <Grid item xs={2}>
                                                            <Typography sx={{ fontWeight: 'bold', fontSize: '14px', marginLeft: '4%' }}>Training Link</Typography>
                                                        </Grid>
                                                        <Grid item xs={2}>
                                                            <Typography sx={{ fontWeight: 'bold', fontSize: '14px', marginLeft: '4%' }}>Certificate</Typography>
                                                        </Grid>
                                                    </Grid>
                                                    <br />
                                                    <Grid container spacing={1} >
                                                        <Grid item xs={2}>
                                                            <Typography sx={{ fontSize: '14px' }}>{training.date}</Typography>
                                                        </Grid>
                                                        <Grid item xs={2}>
                                                            <Typography sx={{ fontSize: '14px', marginLeft: '4%' }}>{training.duration}</Typography>
                                                        </Grid>
                                                        <Grid item xs={2}>
                                                            <Typography sx={{ fontSize: '14px', marginLeft: '4%', textDecoration: 'underline', cursor: 'pointer' }} onClick={() =>
                                                                window.open(training.trainingLink)}>{training.trainingLinkName}
                                                            </Typography>
                                                        </Grid>
                                                        <Grid item xs={3}>
                                                            <Typography sx={{ fontSize: '14px', marginLeft: '4%' }}>Click<a href={Resume} download="SidharthMenonResume" target="_blank"
                                                                rel="noopener noreferrer" style={{ textDecoration: 'none' }}> here </a>to download your certificate</Typography>
                                                        </Grid>
                                                    </Grid>
                                                </div>
                                            </div>
                                            <br />
                                        </>
                                    ))}
                                    <br /><br />
                                </TabPanel>
                                <TabPanel value={value} index={1} dir={theme.direction}>
                                    {ongoingTrainings.map((ongoingTraining, key) => (
                                        <>
                                            {console.log(ongoingTraining)}
                                            {/* <p>{ongoingTraining?.name}</p> */}
                                            <div style={{ display: 'flex' }}>
                                                <img src={ongoingTraining.icon} alt='courseIcon' style={{ borderRadius: '14px', height: '150px', width: '150px', marginTop: '3%' }}></img>
                                                <div style={{ width: '100%', marginLeft: '2%' }}>
                                                    <Typography sx={{ fontWeight: 'bold', fontSize: '18px', marginTop: '3%' }}>{ongoingTraining.name}</Typography>
                                                    <Typography sx={{ fontSize: '14px' }}>{ongoingTraining.description}</Typography>
                                                    <br />
                                                    <Divider />
                                                    <br />
                                                    <Grid container spacing={1}>
                                                        <Grid item xs={0.4}>
                                                            <Typography sx={{ fontWeight: 'bold', fontSize: '14px' }}>Progress</Typography>
                                                        </Grid>
                                                        <Grid item xs={2}></Grid>
                                                        <Grid item xs={2}>
                                                            <Typography sx={{ fontWeight: 'bold', fontSize: '14px', marginLeft: '4%' }}>Training Link</Typography>
                                                        </Grid>
                                                    </Grid>
                                                    <br />
                                                    <Grid container>
                                                        <Grid container spacing={0}>
                                                            <Grid item xs={0.4}>
                                                                <Typography sx={{ fontSize: '14px' }}>{ongoingTraining.progressText}</Typography>
                                                            </Grid>
                                                            <Grid item xs={2} sx={{ marginTop: '0.4%' }}>
                                                                {ongoingTraining.progress > 75 ? (<BorderLinearProgressEnd variant="determinate" value={ongoingTraining.progress} sx={{ maxWidth: '60%' }} />) 
                                                                : ongoingTraining.progress < 25 ? (
                                                                    <BorderLinearProgressStart variant="determinate" value={ongoingTraining.progress} sx={{ maxWidth: '60%' }} />
                                                                ) : (
                                                                    <BorderLinearProgressMiddle variant="determinate" value={ongoingTraining.progress} sx={{ maxWidth: '60%' }} />
                                                                )}
                                                            </Grid>
                                                            <Grid item xs={2}>
                                                                <Typography sx={{ fontSize: '14px', marginLeft: '4%', textDecoration: 'underline', cursor: 'pointer' }} onClick={() =>
                                                                    window.open(ongoingTraining.trainingLink)}>{ongoingTraining.trainingLinkName}
                                                                </Typography>
                                                            </Grid>
                                                        </Grid>
                                                    </Grid>
                                                </div>
                                            </div>
                                            <br />
                                        </>
                                    ))}
                                    <br />
                                </TabPanel>
                            </SwipeableViews>
                        </Box>
                    </Box>
                </Box>
            </ThemeProvider>
        </>
    )

}