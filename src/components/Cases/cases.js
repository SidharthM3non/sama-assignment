import React from "react";
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import './cases.css';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableRow from '@mui/material/TableRow';
import IconButton from '@mui/material/IconButton';
import FirstPageIcon from '@mui/icons-material/FirstPage';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import LastPageIcon from '@mui/icons-material/LastPage';
import PropTypes from 'prop-types';
import TableFooter from '@mui/material/TableFooter';
import { useTheme } from '@mui/material/styles';
import TablePagination from '@mui/material/TablePagination';
import Chart from "chart.js/auto";
import { Doughnut, Line } from "react-chartjs-2";
import Chip from '@mui/material/Chip';

function TablePaginationActions(props) {
    const theme = useTheme();
    const { count, page, rowsPerPage, onPageChange } = props;

    const handleFirstPageButtonClick = (event) => {
        onPageChange(event, 0);
    };

    const handleBackButtonClick = (event) => {
        onPageChange(event, page - 1);
    };

    const handleNextButtonClick = (event) => {
        onPageChange(event, page + 1);
    };

    const handleLastPageButtonClick = (event) => {
        onPageChange(event, Math.max(0, Math.ceil(count / rowsPerPage) - 1));
    };

    return (
        <Box sx={{ flexShrink: 0, ml: 2.5 }}>
            <IconButton
                onClick={handleFirstPageButtonClick}
                disabled={page === 0}
                aria-label="first page"
            >
                {theme.direction === 'rtl' ? <LastPageIcon /> : <FirstPageIcon />}
            </IconButton>
            <IconButton
                onClick={handleBackButtonClick}
                disabled={page === 0}
                aria-label="previous page"
            >
                {theme.direction === 'rtl' ? <KeyboardArrowRight /> : <KeyboardArrowLeft />}
            </IconButton>
            <IconButton
                onClick={handleNextButtonClick}
                disabled={page >= Math.ceil(count / rowsPerPage) - 1}
                aria-label="next page"
            >
                {theme.direction === 'rtl' ? <KeyboardArrowLeft /> : <KeyboardArrowRight />}
            </IconButton>
            <IconButton
                onClick={handleLastPageButtonClick}
                disabled={page >= Math.ceil(count / rowsPerPage) - 1}
                aria-label="last page"
            >
                {theme.direction === 'rtl' ? <FirstPageIcon /> : <LastPageIcon />}
            </IconButton>
        </Box>
    );
}

TablePaginationActions.propTypes = {
    count: PropTypes.number.isRequired,
    onPageChange: PropTypes.func.isRequired,
    page: PropTypes.number.isRequired,
    rowsPerPage: PropTypes.number.isRequired,
};

function createData(id, name, title, date, amount) {
    return { id, name, title, date, amount };
}

const rows = [
    createData('884', 'Sharpooji Pallonji and Co. Pvt. Ltd.', 'Sharpooji Pallonji and Co. Pvt. Ltd. v Rattan India Power Ltd.', '24/01/2023', '₹75000'),
    createData('991', 'Inox Renewables Ltd.', 'Inox Renewables Ltd. v Jayesh Electricals Ltd.', '28/01/2023', '₹20000'),
    createData('1060', 'Goldbricks Infrastructure Pvt. Ltd.', 'Godrej Properties Ltd. v Goldbricks Infrastructure Pvt. Ltd.', '02/02/2023', '₹40000'),
    createData('1236', 'Integrated Sales Service Ltd.', 'Gemini Bay Transcription Pvt. Ltd. v Integrated Sales Service Ltd.', '10/02/2023', '₹35000'),
    createData('1331', 'DLF Home Developers Ltd.', 'Rajpura Homes Pvt. Ltd. v DLF Home Developers Ltd.', '13/03/2023', '₹90000'),
    createData('1402', 'Delhi Airport Metro Express Pvt. Ltd.', 'Delhi Airport Metro Express Pvt. Ltd. v Delhi Metro Rail Corporation Ltd.', '24/03/2023', '₹19000'),
    createData('1555', 'Garg Builders', 'Garg Builders v Bharat Heavy Electricals', '25/04/2023', '₹80000'),
    createData('1780', 'State of U.P. and Anr.', 'Laxmi Continental Construction v State of U.P. and Anr.', '12/06/2023', '₹120000'),
].sort((a, b) => (a.date < b.date ? -1 : 1));

const onHoldRows = [
    createData('884', 'Sharpooji Pallonji and Co. Pvt. Ltd.', 'Sharpooji Pallonji and Co. Pvt. Ltd. v Rattan India Power Ltd.', '24/01/2023', '₹75000'),
    createData('991', 'Inox Renewables Ltd.', 'Inox Renewables Ltd. v Jayesh Electricals Ltd.', '28/01/2023', '₹20000'),
    createData('1060', 'Goldbricks Infrastructure Pvt. Ltd.', 'Godrej Properties Ltd. v Goldbricks Infrastructure Pvt. Ltd.', '02/02/2023', '₹40000'),
    createData('1236', 'Integrated Sales Service Ltd.', 'Gemini Bay Transcription Pvt. Ltd. v Integrated Sales Service Ltd.', '10/02/2023', '₹35000'),
    createData('1331', 'DLF Home Developers Ltd.', 'Rajpura Homes Pvt. Ltd. v DLF Home Developers Ltd.', '13/03/2023', '₹90000'),
    createData('1402', 'Delhi Airport Metro Express Pvt. Ltd.', 'Delhi Airport Metro Express Pvt. Ltd. v Delhi Metro Rail Corporation Ltd.', '24/03/2023', '₹19000'),
    createData('1555', 'Garg Builders', 'Garg Builders v Bharat Heavy Electricals', '25/04/2023', '₹80000'),
    createData('1780', 'State of U.P. and Anr.', 'Laxmi Continental Construction v State of U.P. and Anr.', '12/06/2023', '₹120000'),
    createData('884', 'Sharpooji Pallonji and Co. Pvt. Ltd.', 'Sharpooji Pallonji and Co. Pvt. Ltd. v Rattan India Power Ltd.', '24/01/2023', '₹75000'),
].sort((a, b) => (a.date < b.date ? -1 : 1));

const consentedRows = [
    createData('884', 'Sharpooji Pallonji and Co. Pvt. Ltd.', 'Sharpooji Pallonji and Co. Pvt. Ltd. v Rattan India Power Ltd.', '24/01/2023', '₹75000'),
    createData('991', 'Inox Renewables Ltd.', 'Inox Renewables Ltd. v Jayesh Electricals Ltd.', '28/01/2023', '₹20000'),
    createData('1060', 'Goldbricks Infrastructure Pvt. Ltd.', 'Godrej Properties Ltd. v Goldbricks Infrastructure Pvt. Ltd.', '02/02/2023', '₹40000'),
    createData('1236', 'Integrated Sales Service Ltd.', 'Gemini Bay Transcription Pvt. Ltd. v Integrated Sales Service Ltd.', '10/02/2023', '₹35000'),
    createData('1331', 'DLF Home Developers Ltd.', 'Rajpura Homes Pvt. Ltd. v DLF Home Developers Ltd.', '13/03/2023', '₹90000'),
    createData('1402', 'Delhi Airport Metro Express Pvt. Ltd.', 'Delhi Airport Metro Express Pvt. Ltd. v Delhi Metro Rail Corporation Ltd.', '24/03/2023', '₹19000'),
    createData('1555', 'Garg Builders', 'Garg Builders v Bharat Heavy Electricals', '25/04/2023', '₹80000'),
].sort((a, b) => (a.date < b.date ? -1 : 1));

const withdrawnRows = [
    createData('884', 'Sharpooji Pallonji and Co. Pvt. Ltd.', 'Sharpooji Pallonji and Co. Pvt. Ltd. v Rattan India Power Ltd.', '24/01/2023', '₹75000'),
    createData('991', 'Inox Renewables Ltd.', 'Inox Renewables Ltd. v Jayesh Electricals Ltd.', '28/01/2023', '₹20000'),
].sort((a, b) => (a.date < b.date ? -1 : 1));

const labels = ["Settled", "On-Hold", "Consented", "Withdrawn"];

const data = {
    labels: labels,
    datasets: [
        {
            labels: [
                'Settled',
                'On-Hold',
                'Consented',
                'Withdrawn'
            ],
            backgroundColor: [
                'rgb(183, 153, 255)',
                'rgb(172, 188, 255)',
                'rgb(174, 226, 255)',
                'rgb(230, 255, 253)',
            ],
            data: [8, 10, 7, 2],
            hoverOffset: 4
        },
    ],
};

const caseLabels = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
const settledData = {
    labels: caseLabels,
    datasets: [
        {
            label: "Settled cases",
            backgroundColor: "rgb(183, 153, 255)",
            data: [1, 0, 2, 0, 1, 1, 2, 0, 0, 0, 1, 0],
        },
    ],
};
const onHoldData = {
    labels: caseLabels,
    datasets: [
        {
            label: "On-Hold cases",
            backgroundColor: "rgb(172, 188, 255)",
            data: [1, 1, 2, 0, 1, 1, 2, 0, 1, 0, 1, 0],
        },
    ],
};
const consentedData = {
    labels: caseLabels,
    datasets: [
        {
            label: "Consented cases",
            backgroundColor: "rgb(174, 226, 255)",
            data: [2, 0, 2, 0, 0, 0, 1, 2, 0, 0, 0, 0],
        },
    ],
};
const withdrawnData = {
    labels: caseLabels,
    datasets: [
        {
            label: "Withdrawn cases",
            backgroundColor: "rgb(230, 255, 253)",
            data: [1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        },
    ],
};

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

export default function Cases() {

    const [isSettled, setIsSettled] = React.useState(true);
    const [isOnHold, setIsOnHold] = React.useState(false);
    const [isConsented, setIsConsented] = React.useState(false);
    const [isWithdrawn, setIsWithdrawn] = React.useState(false);

    const [page, setPage] = React.useState(0);
    const [onHoldPage, setOnHoldPage] = React.useState(0);
    const [consentedPage, setConsentedPage] = React.useState(0);
    const [withdrawnPage, setWithdrawnPage] = React.useState(0);

    const [rowsPerPage, setRowsPerPage] = React.useState(5);
    const [onHoldRowsPerPage, setOnHoldRowsPerPage] = React.useState(5);
    const [consentedRowsPerPage, setConsentedRowsPerPage] = React.useState(5);
    const [withdrawnRowsPerPage, setWithdrawnRowsPerPage] = React.useState(5);

    const emptyRows =
        page > 0 ? Math.max(0, (1 + page) * rowsPerPage - rows.length) : 0;

    const emptyOnHoldRows =
        page > 0 ? Math.max(0, (1 + page) * rowsPerPage - onHoldRows.length) : 0;

    const emptyConsentedRows =
        page > 0 ? Math.max(0, (1 + page) * rowsPerPage - consentedRows.length) : 0;

    const emptyWithdrawnRows =
        page > 0 ? Math.max(0, (1 + page) * rowsPerPage - withdrawnRows.length) : 0;

    const handleChangeSettledPage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeOnHoldPage = (event, newPage) => {
        setOnHoldPage(newPage);
    };

    const handleChangeConsentedPage = (event, newPage) => {
        setConsentedPage(newPage);
    };

    const handleChangeWithdrawnPage = (event, newPage) => {
        setWithdrawnPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0);
    };

    const handleChangeOnHoldRowsPerPage = (event) => {
        setOnHoldRowsPerPage(parseInt(event.target.value, 10));
        setOnHoldPage(0);
    };

    const handleChangeConsentedRowsPerPage = (event) => {
        setConsentedRowsPerPage(parseInt(event.target.value, 10));
        setConsentedPage(0);
    };

    const handleChangeWithdrawnRowsPerPage = (event) => {
        setWithdrawnRowsPerPage(parseInt(event.target.value, 10));
        setWithdrawnPage(0);
    };

    const [settledPercentage, setSettledPercentage] = React.useState('');
    const [onHoldPercentage, setOnHoldPercentage] = React.useState('');
    const [consentedPercentage, setConsentedPercentage] = React.useState('');
    const [withdrawnPercentage, setWithdrawnPercentage] = React.useState('');

    React.useEffect(() => {
        let percentage = rows.length + onHoldRows.length + consentedRows.length + withdrawnRows.length;
        let sPercent = Math.floor(rows.length/percentage * 100);
        let ohPercent = Math.floor(onHoldRows.length/percentage * 100);
        let cPercent = Math.floor(consentedRows.length/percentage * 100);
        let wPercent = Math.floor(withdrawnRows.length/percentage * 100);
        setSettledPercentage(sPercent + '%');
        setOnHoldPercentage(ohPercent + '%');
        setConsentedPercentage(cPercent + '%');
        setWithdrawnPercentage(wPercent + '%');
    })

    return (
        <div style={{ height: '100%' }} >
            <ThemeProvider theme={theme}>
                <Box sx={{ flexGrow: 1, marginTop: '5%' }}>
                    <Box sx={{ borderColor: 'white' }}>
                        <div style={{ width: '82.9%', margin: '0 auto' }}>
                            {/* <Doughnut data={data} /> */}
                            <Card elevation={0} sx={{ backgroundColor: '#c0c9e1', borderRadius: '16px' }}>
                                <Typography variant="h5" sx={{ marginLeft: '1%', marginTop: '1%' }}>Case Distributions</Typography>
                                <Typography variant="h5" sx={{ textAlign: 'center', marginTop: '1%' }}>
                                    {isSettled ? (
                                        <>
                                            Settled
                                        </>
                                    ) : (null)}
                                    {isOnHold ? (
                                        <>
                                            On-Hold
                                        </>
                                    ) : (null)}
                                    {isConsented ? (
                                        <>
                                            Consented
                                        </>
                                    ) : (null)}
                                    {isWithdrawn ? (
                                        <>
                                            Withdrawn
                                        </>
                                    ) : (null)}
                                </Typography>
                                <Typography variant="h2" sx={{ textAlign: 'center' }}>
                                    {isSettled ? (
                                        <>
                                            {settledPercentage}
                                        </>
                                    ) : (null)}
                                    {isOnHold ? (
                                        <>
                                            {onHoldPercentage}
                                        </>
                                    ) : (null)}
                                    {isConsented ? (
                                        <>
                                            {consentedPercentage}
                                        </>
                                    ) : (null)}
                                    {isWithdrawn ? (
                                        <>
                                            {withdrawnPercentage}
                                        </>
                                    ) : (null)}
                                </Typography>
                                <div class="chart-container" style={{ margin: '0 auto', width: '50%', marginBottom: '-12.5%', marginTop: '-12%' }}>
                                    <Doughnut
                                        data={data}
                                        options={{
                                            aspectRatio: 1,
                                            layout: {
                                                padding: {
                                                    left: 0,
                                                    right: 0,
                                                    top: 0,
                                                    bottom: 0,
                                                },
                                            },
                                            plugins: {
                                                legend: {
                                                    position: 'right',
                                                    display: false,
                                                },
                                            },
                                            elements: {
                                                arc: {
                                                    borderColor: '#c0c9e1'
                                                }
                                            },
                                            hover: {
                                                mode: 'nearest',
                                                intersect: true,
                                            },
                                            rotation: -90,
                                            circumference: 180,
                                            cutout: "60%",
                                            maintainAspectRatio: true,
                                            responsive: true,
                                        }}
                                    />
                                </div>
                            </Card>
                        </div>
                        <br /><br />
                        <Grid container spacing={4} alignItems="center" justifyContent="center">
                            <Grid item xs={4}>
                                <Card elevation={0} sx={{ backgroundColor: '#ACB1D6', borderRadius: '16px', height: '100%' }}>
                                    <CardContent>
                                        <Typography variant="h5" component="div">
                                            Cases
                                        </Typography>
                                        <Card className="paper" elevation={0} sx={{ cursor: 'pointer', backgroundColor: '#DBDFEA', marginTop: '2%', borderRadius: '20px', paddingBottom: 1.8 }}
                                            onClick={() => {
                                                setIsSettled(true);
                                                setIsConsented(false); setIsOnHold(false); setIsWithdrawn(false);
                                            }}>
                                            <CardContent sx={{ display: 'flex', position: 'relative' }}>
                                                <Typography variant="h5" component="div">
                                                    Settled
                                                </Typography>
                                                <Chip label="8" sx={{ position: 'absolute', right: 10, backgroundColor: 'white' }} />
                                            </CardContent>
                                        </Card>
                                        <Card className="paper" elevation={0} sx={{ cursor: 'pointer', backgroundColor: '#DBDFEA', marginTop: '2%', borderRadius: '20px', paddingBottom: 1.8 }}
                                            onClick={() => {
                                                setIsOnHold(true);
                                                setIsConsented(false); setIsSettled(false); setIsWithdrawn(false);
                                            }}>
                                            <CardContent sx={{ display: 'flex', position: 'relative' }}>
                                                <Typography variant="h5" component="div">
                                                    On-Hold
                                                </Typography>
                                                <Chip label="10" sx={{ position: 'absolute', right: 10, backgroundColor: 'white' }} />
                                            </CardContent>
                                        </Card>
                                        <Card className="paper" elevation={0} sx={{ cursor: 'pointer', backgroundColor: '#DBDFEA', marginTop: '2%', borderRadius: '20px', paddingBottom: 1.8 }}
                                            onClick={() => {
                                                setIsConsented(true);
                                                setIsSettled(false); setIsOnHold(false); setIsWithdrawn(false);
                                            }}>
                                            <CardContent sx={{ display: 'flex', position: 'relative' }}>
                                                <Typography variant="h5" component="div">
                                                    Consented
                                                </Typography>
                                                <Chip label="7" sx={{ position: 'absolute', right: 10, backgroundColor: 'white' }} />
                                            </CardContent>
                                        </Card>
                                        <Card className="paper" elevation={0} sx={{ cursor: 'pointer', backgroundColor: '#DBDFEA', marginTop: '2%', borderRadius: '20px', paddingBottom: 1.8 }}
                                            onClick={() => {
                                                setIsWithdrawn(true);
                                                setIsConsented(false); setIsOnHold(false); setIsSettled(false);
                                            }}>
                                            <CardContent sx={{ display: 'flex', position: 'relative' }}>
                                                <Typography variant="h5" component="div">
                                                    Withdrawn
                                                </Typography>
                                                <Chip label="2" sx={{ position: 'absolute', right: 10, backgroundColor: 'white' }} />
                                            </CardContent>
                                        </Card>
                                    </CardContent>
                                </Card>
                            </Grid>
                            <Grid item xs={6}>
                                <Card elevation={0} sx={{ backgroundColor: '#DBDFEA', borderRadius: '16px' }}>
                                    {isSettled ? (<Line data={settledData} />) : (null)}
                                    {isOnHold ? (<Line data={onHoldData} />) : (null)}
                                    {isConsented ? (<Line data={consentedData} />) : (null)}
                                    {isWithdrawn ? (<Line data={withdrawnData} />) : (null)}
                                </Card>
                            </Grid>
                        </Grid>
                        <br /><br />
                        <Grid container spacing={4} alignItems="center" justifyContent="center">
                            <Grid item xs={10}>
                                {isSettled ? (
                                    <TableContainer component={Paper} sx={{ backgroundColor: '#ACB1D6', borderRadius: '16px' }}>
                                        <Table sx={{ minWidth: 500 }} aria-label="custom pagination table">
                                            <TableBody>
                                                <TableRow>
                                                    <TableCell component="th" scope="row" sx={{ fontWeight: 'bold', fontSize: '20px', borderBottomColor: '#ACB1D6', whiteSpace: 'nowrap' }}>
                                                        Settled Cases
                                                    </TableCell>
                                                </TableRow>
                                                <TableRow>
                                                    <TableCell component="th" scope="row" sx={{ fontWeight: 'bold', color: '#DBDFEA' }}>
                                                        Case ID
                                                    </TableCell>
                                                    <TableCell sx={{ fontWeight: 'bold', color: '#DBDFEA' }}>
                                                        Client Name
                                                    </TableCell>
                                                    <TableCell sx={{ fontWeight: 'bold', color: '#DBDFEA' }}>
                                                        Case Title
                                                    </TableCell>
                                                    <TableCell style={{ width: 160, fontWeight: 'bold', color: '#DBDFEA' }}>
                                                        Date
                                                    </TableCell>
                                                    <TableCell sx={{ width: 160, fontWeight: 'bold', color: '#DBDFEA' }}>
                                                        Claim Amount
                                                    </TableCell>
                                                </TableRow>
                                                {(rowsPerPage > 0
                                                    ? rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                                                    : rows
                                                ).map((row) => (
                                                    <TableRow key={row.name}>
                                                        <TableCell component="th" scope="row" sx={{ fontWeight: 'bold' }}>
                                                            {row.id}
                                                        </TableCell>
                                                        <TableCell sx={{ fontWeight: 'bold' }}>
                                                            {row.name}
                                                        </TableCell>
                                                        <TableCell sx={{ fontWeight: 'bold' }}>
                                                            {row.title}
                                                        </TableCell>
                                                        <TableCell sx={{ width: 160, fontWeight: 'bold' }}>
                                                            {row.date}
                                                        </TableCell>
                                                        <TableCell style={{ width: 160, fontWeight: 'bold' }}>
                                                            {row.amount}
                                                        </TableCell>
                                                    </TableRow>
                                                ))}
                                                {/* {emptyRows > 0 && (
                                                    <TableRow style={{ height: 53 * emptyRows }}>
                                                        <TableCell colSpan={6} />
                                                    </TableRow>
                                                )} */}
                                            </TableBody>
                                            <TableFooter>
                                                <TableRow>
                                                    <TablePagination
                                                        rowsPerPageOptions={[5, 10, 25, { label: 'All', value: -1 }]}
                                                        colSpan={6}
                                                        count={rows.length}
                                                        rowsPerPage={rowsPerPage}
                                                        page={page}
                                                        SelectProps={{
                                                            inputProps: {
                                                                'aria-label': 'rows per page',
                                                            },
                                                            native: true,
                                                        }}
                                                        onPageChange={handleChangeSettledPage}
                                                        onRowsPerPageChange={handleChangeRowsPerPage}
                                                        ActionsComponent={TablePaginationActions}
                                                    />
                                                </TableRow>
                                            </TableFooter>
                                        </Table>
                                    </TableContainer>
                                ) : (null)}
                                {isOnHold ? (
                                    <TableContainer component={Paper} sx={{ backgroundColor: '#ACB1D6', borderRadius: '16px' }}>
                                        <Table sx={{ minWidth: 500 }} aria-label="custom pagination table">
                                            <TableBody>
                                                <TableRow>
                                                    <TableCell component="th" scope="row" sx={{ fontWeight: 'bold', fontSize: '20px', borderBottomColor: '#ACB1D6', whiteSpace: 'nowrap' }}>
                                                        On-Hold Cases
                                                    </TableCell>
                                                </TableRow>
                                                <TableRow>
                                                    <TableCell component="th" scope="row" sx={{ fontWeight: 'bold', color: '#DBDFEA' }}>
                                                        Case ID
                                                    </TableCell>
                                                    <TableCell sx={{ fontWeight: 'bold', color: '#DBDFEA' }}>
                                                        Client Name
                                                    </TableCell>
                                                    <TableCell sx={{ fontWeight: 'bold', color: '#DBDFEA' }}>
                                                        Case Title
                                                    </TableCell>
                                                    <TableCell style={{ width: 160, fontWeight: 'bold', color: '#DBDFEA' }}>
                                                        Date
                                                    </TableCell>
                                                    <TableCell sx={{ width: 160, fontWeight: 'bold', color: '#DBDFEA' }}>
                                                        Claim Amount
                                                    </TableCell>
                                                </TableRow>
                                                {(onHoldRowsPerPage > 0
                                                    ? onHoldRows.slice(onHoldPage * onHoldRowsPerPage, onHoldPage * onHoldRowsPerPage + onHoldRowsPerPage)
                                                    : onHoldRows
                                                ).map((row) => (
                                                    <TableRow key={row.name}>
                                                        <TableCell component="th" scope="row" sx={{ fontWeight: 'bold' }}>
                                                            {row.id}
                                                        </TableCell>
                                                        <TableCell sx={{ fontWeight: 'bold' }}>
                                                            {row.name}
                                                        </TableCell>
                                                        <TableCell sx={{ fontWeight: 'bold' }}>
                                                            {row.title}
                                                        </TableCell>
                                                        <TableCell sx={{ width: 160, fontWeight: 'bold' }}>
                                                            {row.date}
                                                        </TableCell>
                                                        <TableCell style={{ width: 160, fontWeight: 'bold' }}>
                                                            {row.amount}
                                                        </TableCell>
                                                    </TableRow>
                                                ))}
                                                {/* {emptyOnHoldRows > 0 && (
                                                    <TableRow style={{ height: 53 * emptyOnHoldRows }}>
                                                        <TableCell colSpan={6} />
                                                    </TableRow>
                                                )} */}
                                            </TableBody>
                                            <TableFooter>
                                                <TableRow>
                                                    <TablePagination
                                                        rowsPerPageOptions={[5, 10, 25, { label: 'All', value: -1 }]}
                                                        colSpan={6}
                                                        count={onHoldRows.length}
                                                        rowsPerPage={onHoldRowsPerPage}
                                                        page={onHoldPage}
                                                        SelectProps={{
                                                            inputProps: {
                                                                'aria-label': 'rows per page',
                                                            },
                                                            native: true,
                                                        }}
                                                        onPageChange={handleChangeOnHoldPage}
                                                        onRowsPerPageChange={handleChangeOnHoldRowsPerPage}
                                                        ActionsComponent={TablePaginationActions}
                                                    />
                                                </TableRow>
                                            </TableFooter>
                                        </Table>
                                    </TableContainer>
                                ) : (null)}
                                {isConsented ? (
                                    <TableContainer component={Paper} sx={{ backgroundColor: '#ACB1D6', borderRadius: '16px' }}>
                                        <Table sx={{ minWidth: 500 }} aria-label="custom pagination table">
                                            <TableBody>
                                                <TableRow>
                                                    <TableCell component="th" scope="row" sx={{ fontWeight: 'bold', fontSize: '20px', borderBottomColor: '#ACB1D6', whiteSpace: 'nowrap' }}>
                                                        Consented Cases
                                                    </TableCell>
                                                </TableRow>
                                                <TableRow>
                                                    <TableCell component="th" scope="row" sx={{ fontWeight: 'bold', color: '#DBDFEA' }}>
                                                        Case ID
                                                    </TableCell>
                                                    <TableCell sx={{ fontWeight: 'bold', color: '#DBDFEA' }}>
                                                        Client Name
                                                    </TableCell>
                                                    <TableCell sx={{ fontWeight: 'bold', color: '#DBDFEA' }}>
                                                        Case Title
                                                    </TableCell>
                                                    <TableCell style={{ width: 160, fontWeight: 'bold', color: '#DBDFEA' }}>
                                                        Date
                                                    </TableCell>
                                                    <TableCell sx={{ width: 160, fontWeight: 'bold', color: '#DBDFEA' }}>
                                                        Claim Amount
                                                    </TableCell>
                                                </TableRow>
                                                {(consentedRowsPerPage > 0
                                                    ? consentedRows.slice(consentedPage * consentedRowsPerPage, consentedPage * consentedRowsPerPage + consentedRowsPerPage)
                                                    : consentedRows
                                                ).map((row) => (
                                                    <TableRow key={row.name}>
                                                        <TableCell component="th" scope="row" sx={{ fontWeight: 'bold' }}>
                                                            {row.id}
                                                        </TableCell>
                                                        <TableCell sx={{ fontWeight: 'bold' }}>
                                                            {row.name}
                                                        </TableCell>
                                                        <TableCell sx={{ fontWeight: 'bold' }}>
                                                            {row.title}
                                                        </TableCell>
                                                        <TableCell sx={{ width: 160, fontWeight: 'bold' }}>
                                                            {row.date}
                                                        </TableCell>
                                                        <TableCell style={{ width: 160, fontWeight: 'bold' }}>
                                                            {row.amount}
                                                        </TableCell>
                                                    </TableRow>
                                                ))}
                                                {emptyConsentedRows > 0 && (
                                                    <TableRow style={{ height: 53 * emptyConsentedRows }}>
                                                        <TableCell colSpan={6} />
                                                    </TableRow>
                                                )}
                                            </TableBody>
                                            <TableFooter>
                                                <TableRow>
                                                    <TablePagination
                                                        rowsPerPageOptions={[5, 10, 25, { label: 'All', value: -1 }]}
                                                        colSpan={6}
                                                        count={consentedRows.length}
                                                        rowsPerPage={consentedRowsPerPage}
                                                        page={consentedPage}
                                                        SelectProps={{
                                                            inputProps: {
                                                                'aria-label': 'rows per page',
                                                            },
                                                            native: true,
                                                        }}
                                                        onPageChange={handleChangeConsentedPage}
                                                        onRowsPerPageChange={handleChangeConsentedRowsPerPage}
                                                        ActionsComponent={TablePaginationActions}
                                                    />
                                                </TableRow>
                                            </TableFooter>
                                        </Table>
                                    </TableContainer>
                                ) : (null)}
                                {isWithdrawn ? (
                                    <TableContainer component={Paper} sx={{ backgroundColor: '#ACB1D6', borderRadius: '16px' }}>
                                        <Table sx={{ minWidth: 500 }} aria-label="custom pagination table">
                                            <TableBody>
                                                <TableRow>
                                                    <TableCell component="th" scope="row" sx={{ fontWeight: 'bold', fontSize: '20px', borderBottomColor: '#ACB1D6', whiteSpace: 'nowrap' }}>
                                                        Withdrawn Cases
                                                    </TableCell>
                                                </TableRow>
                                                <TableRow>
                                                    <TableCell component="th" scope="row" sx={{ fontWeight: 'bold', color: '#DBDFEA' }}>
                                                        Case ID
                                                    </TableCell>
                                                    <TableCell sx={{ fontWeight: 'bold', color: '#DBDFEA' }}>
                                                        Client Name
                                                    </TableCell>
                                                    <TableCell sx={{ fontWeight: 'bold', color: '#DBDFEA' }}>
                                                        Case Title
                                                    </TableCell>
                                                    <TableCell style={{ width: 160, fontWeight: 'bold', color: '#DBDFEA' }}>
                                                        Date
                                                    </TableCell>
                                                    <TableCell sx={{ width: 160, fontWeight: 'bold', color: '#DBDFEA' }}>
                                                        Claim Amount
                                                    </TableCell>
                                                </TableRow>
                                                {(withdrawnRowsPerPage > 0
                                                    ? withdrawnRows.slice(withdrawnPage * withdrawnRowsPerPage, withdrawnPage * withdrawnRowsPerPage + withdrawnRowsPerPage)
                                                    : withdrawnRows
                                                ).map((row) => (
                                                    <TableRow key={row.name}>
                                                        <TableCell component="th" scope="row" sx={{ fontWeight: 'bold' }}>
                                                            {row.id}
                                                        </TableCell>
                                                        <TableCell sx={{ fontWeight: 'bold' }}>
                                                            {row.name}
                                                        </TableCell>
                                                        <TableCell sx={{ fontWeight: 'bold' }}>
                                                            {row.title}
                                                        </TableCell>
                                                        <TableCell sx={{ width: 160, fontWeight: 'bold' }}>
                                                            {row.date}
                                                        </TableCell>
                                                        <TableCell style={{ width: 160, fontWeight: 'bold' }}>
                                                            {row.amount}
                                                        </TableCell>
                                                    </TableRow>
                                                ))}
                                                {emptyWithdrawnRows > 0 && (
                                                    <TableRow style={{ height: 53 * emptyWithdrawnRows }}>
                                                        <TableCell colSpan={6} />
                                                    </TableRow>
                                                )}
                                            </TableBody>
                                            <TableFooter>
                                                <TableRow>
                                                    <TablePagination
                                                        rowsPerPageOptions={[5, 10, 25, { label: 'All', value: -1 }]}
                                                        colSpan={6}
                                                        count={withdrawnRows.length}
                                                        rowsPerPage={withdrawnRowsPerPage}
                                                        page={withdrawnPage}
                                                        SelectProps={{
                                                            inputProps: {
                                                                'aria-label': 'rows per page',
                                                            },
                                                            native: true,
                                                        }}
                                                        onPageChange={handleChangeWithdrawnPage}
                                                        onRowsPerPageChange={handleChangeWithdrawnRowsPerPage}
                                                        ActionsComponent={TablePaginationActions}
                                                    />
                                                </TableRow>
                                            </TableFooter>
                                        </Table>
                                    </TableContainer>
                                ) : (null)}
                            </Grid>
                        </Grid>
                        <br /><br />
                    </Box>
                </Box>
            </ThemeProvider>
        </div >
    )

}