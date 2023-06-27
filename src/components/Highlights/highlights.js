import React from "react";
import Grid from '@mui/material/Grid';
import { Typography } from "@mui/material";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import Collapse from '@mui/material/Collapse';

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

export default function Highlights() {

    const [openFirst, setFirstOpen] = React.useState(false);
    const [openSecond, setSecondOpen] = React.useState(false);
    const [openThird, setThirdOpen] = React.useState(false);
    const [openFourth, setFourthOpen] = React.useState(false);
    const [openFifth, setFifthOpen] = React.useState(false);
    const [openSixth, setSixthOpen] = React.useState(false);

    return (
        <>
            <ThemeProvider theme={theme}>
                <Box sx={{ flexGrow: 1, marginTop: '7%', marginLeft: '5%', marginRight: '5%', height: '100%' }}>
                    <Typography variant="h6" sx={{ fontWeight: 'bold' }}>Your recent highlights/achievements</Typography>
                    <Card elevation={0} sx={{ backgroundColor: 'white', borderRadius: '10px', height: '100%', marginTop: '2%' }}>
                        <CardContent>
                            <Grid container spacing={5}>
                                <Grid item xs={1} sx={{ marginLeft: '1%' }}>
                                    <Typography sx={{ fontWeight: 'bold', fontSize: '14px' }}>Case ID</Typography>
                                </Grid>
                                <Grid item xs={3}>
                                    <Typography sx={{ fontWeight: 'bold', fontSize: '14px', marginLeft: '4%' }}>Case Title</Typography>
                                </Grid>
                                <Grid item xs={2}>
                                    <Typography sx={{ fontWeight: 'bold', fontSize: '14px', marginLeft: '4%' }}>Client Name</Typography>
                                </Grid>
                                <Grid item xs={2}>
                                    <Typography sx={{ fontWeight: 'bold', fontSize: '14px', marginLeft: '4%' }}>Date</Typography>
                                </Grid>
                                <Grid item xs={2}>
                                    <Typography sx={{ fontWeight: 'bold', fontSize: '14px', marginLeft: '4%' }}>Type</Typography>
                                </Grid>
                                <Grid item xs={1}>
                                    <Typography sx={{ fontWeight: 'bold', fontSize: '14px', marginLeft: '4%' }}>Closing Amount</Typography>
                                </Grid>
                            </Grid>
                        </CardContent>
                    </Card>
                    <Card elevation={0} sx={{ backgroundColor: '#DBDFEA', borderRadius: '10px', height: '100%' }}>
                        <CardContent sx={{ display: 'flex', position: 'relative' }}>
                            <Grid container spacing={5}>
                                <Grid item xs={1} sx={{ marginLeft: '1%' }}>
                                    <Typography sx={{ fontWeight: 'bold', fontSize: '14px' }}>9987</Typography>
                                </Grid>
                                <Grid item xs={3}>
                                    <Typography sx={{ fontWeight: 'bold', fontSize: '14px', marginLeft: '4%' }}>Depp v Heard</Typography>
                                </Grid>
                                <Grid item xs={2}>
                                    <Typography sx={{ fontWeight: 'bold', fontSize: '14px', marginLeft: '4%' }}>Johnny Depp</Typography>
                                </Grid>
                                <Grid item xs={2}>
                                    <Typography sx={{ fontWeight: 'bold', fontSize: '14px', marginLeft: '4%' }}>01-June-2022</Typography>
                                </Grid>
                                <Grid item xs={2}>
                                    <Typography sx={{ fontWeight: 'bold', fontSize: '14px', marginLeft: '4%' }}>Settled</Typography>
                                </Grid>
                                <Grid item xs={1}>
                                    <Typography sx={{ fontWeight: 'bold', fontSize: '14px', marginLeft: '4%' }}>$10 million</Typography>
                                </Grid>
                            </Grid>
                            <IconButton
                                aria-label="expand row"
                                size="small"
                                onClick={() => setFourthOpen(!openFourth)}
                                sx={{ position: 'absolute', right: 5, marginTop: '-0.3%', backgroundColor: 'white' }}
                            >
                                {openFourth ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
                            </IconButton>
                        </CardContent>
                        <Collapse in={openFourth} timeout="auto" unmountOnExit>
                            <CardContent>
                                <Grid container spacing={5}>
                                    <Grid item xs={1} sx={{ marginLeft: '1%' }}>
                                    </Grid>
                                    <Grid item xs={3}>
                                        <Typography sx={{ fontSize: '14px', marginLeft: '4%' }}>On June 1, 2022, after nearly two days of deliberations, the jury found that Depp
                                         had proven all the elements of defamation for all three statements from Heard's 2018 op-ed, including that the statements were false, and 
                                         that Heard defamed Depp with actual malice. The jury awarded Depp $10 million in compensatory damages and $5 million in punitive damages 
                                         from Heard. The punitive damages, however, were reduced to $350,000 due to a limit imposed by Virginia state law.
                                         In regard to Heard's counterclaim, the jury found the second of the three contested statements that Depp's former lawyer Adam Waldman had 
                                         published in the Daily Mail to be defamatory and false, defaming Heard with actual malice. Regarding the other two contested statements, 
                                         the jurors concluded that Heard's attorneys had not proven all the elements of defamation. Heard was awarded $2 million in compensatory 
                                         damages from Depp but no punitive damages.</Typography>
                                    </Grid>
                                    <Grid item xs={2}>
                                        <Typography sx={{ fontWeight: 'bold', fontSize: '14px', marginLeft: '4%' }}>vs.</Typography>
                                        <br /><Typography sx={{ fontWeight: 'bold', fontSize: '14px', marginLeft: '4%' }}>Amber Heard</Typography>
                                    </Grid>
                                    <Grid item xs={2}>
                                    </Grid>
                                    <Grid item xs={2}>
                                        <Typography sx={{
                                            fontSize: '14px', marginLeft: '4%', backgroundColor: 'white', borderRadius: '14px',
                                            paddingLeft: '15px'
                                        }}>Helped Johnny clear his name and win $10 million in damages</Typography>
                                    </Grid>
                                    <Grid item xs={1}>
                                    </Grid>
                                </Grid>
                            </CardContent>
                        </Collapse>
                    </Card>
                    <br />
                    <Card elevation={0} sx={{ backgroundColor: '#DBDFEA', borderRadius: '10px', height: '100%' }}>
                        <CardContent sx={{ display: 'flex', position: 'relative' }}>
                            <Grid container spacing={5}>
                                <Grid item xs={1} sx={{ marginLeft: '1%' }}>
                                    <Typography sx={{ fontWeight: 'bold', fontSize: '14px' }}>1555</Typography>
                                </Grid>
                                <Grid item xs={3}>
                                    <Typography sx={{ fontWeight: 'bold', fontSize: '14px', marginLeft: '4%' }}>Garg Builders v Bharat Heavy Electricals</Typography>
                                </Grid>
                                <Grid item xs={2}>
                                    <Typography sx={{ fontWeight: 'bold', fontSize: '14px', marginLeft: '4%' }}>Garg Builders</Typography>
                                </Grid>
                                <Grid item xs={2}>
                                    <Typography sx={{ fontWeight: 'bold', fontSize: '14px', marginLeft: '4%' }}>25-April-2023</Typography>
                                </Grid>
                                <Grid item xs={2}>
                                    <Typography sx={{ fontWeight: 'bold', fontSize: '14px', marginLeft: '4%' }}>Settled</Typography>
                                </Grid>
                                <Grid item xs={1}>
                                    <Typography sx={{ fontWeight: 'bold', fontSize: '14px', marginLeft: '4%' }}>₹80,000</Typography>
                                </Grid>
                            </Grid>
                            <IconButton
                                aria-label="expand row"
                                size="small"
                                onClick={() => setFirstOpen(!openFirst)}
                                sx={{ position: 'absolute', right: 5, marginTop: '-0.3%', backgroundColor: 'white' }}
                            >
                                {openFirst ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
                            </IconButton>
                        </CardContent>
                        <Collapse in={openFirst} timeout="auto" unmountOnExit>
                            <CardContent>
                                <Grid container spacing={5}>
                                    <Grid item xs={1} sx={{ marginLeft: '1%' }}>
                                    </Grid>
                                    <Grid item xs={3}>
                                        <Typography sx={{ fontSize: '14px', marginLeft: '4%' }}>In the recent case of Garg Builders v Bharat Heavy Electricals Limited [Civil Appeal
                                            No. 6261 of 2021], a two-judge bench of the Supreme Court of India (Supreme Court) held that an arbitrator cannot grant pendente lite
                                            interest when the contracting parties have freely and expressly opted out of receiving interest under the contract.
                                            The Supreme Court's verdict holds special significance since (i) it analysed the scope of the interest barring clause under the contract
                                            between the parties vis-à-vis Section 28 of the Indian Contract Act, 1872 (Contract Act); and (ii) it reinforced the well-founded principle
                                            that an arbitrator is a creature of contract, and its powers cannot traverse beyond the purview of the contract.</Typography>
                                    </Grid>
                                    <Grid item xs={2}>
                                        <Typography sx={{ fontWeight: 'bold', fontSize: '14px', marginLeft: '4%' }}>vs.</Typography>
                                        <br /><Typography sx={{ fontWeight: 'bold', fontSize: '14px', marginLeft: '4%' }}>Bharat Heavy Electricals</Typography>
                                    </Grid>
                                    <Grid item xs={2}>
                                    </Grid>
                                    <Grid item xs={2}>
                                        <Typography sx={{
                                            fontSize: '14px', marginLeft: '4%', backgroundColor: 'white', borderRadius: '14px',
                                            paddingLeft: '15px'
                                        }}>Helped in resolving this case in record time.</Typography>
                                    </Grid>
                                    <Grid item xs={1}>
                                    </Grid>
                                </Grid>
                            </CardContent>
                        </Collapse>
                    </Card>
                    <br />
                    <Card elevation={0} sx={{ backgroundColor: '#DBDFEA', borderRadius: '10px', height: '100%' }}>
                        <CardContent sx={{ display: 'flex', position: 'relative' }}>
                            <Grid container spacing={5}>
                                <Grid item xs={1} sx={{ marginLeft: '1%' }}>
                                    <Typography sx={{ fontWeight: 'bold', fontSize: '14px' }}>1236</Typography>
                                </Grid>
                                <Grid item xs={3}>
                                    <Typography sx={{ fontWeight: 'bold', fontSize: '14px', marginLeft: '4%' }}>Gemini Bay Transcription Pvt. Ltd. v Integrated Sales Service Ltd.</Typography>
                                </Grid>
                                <Grid item xs={2}>
                                    <Typography sx={{ fontWeight: 'bold', fontSize: '14px', marginLeft: '4%' }}>Integrated Sales Service Ltd.</Typography>
                                </Grid>
                                <Grid item xs={2}>
                                    <Typography sx={{ fontWeight: 'bold', fontSize: '14px', marginLeft: '4%' }}>10-February-2023</Typography>
                                </Grid>
                                <Grid item xs={2}>
                                    <Typography sx={{ fontWeight: 'bold', fontSize: '14px', marginLeft: '4%' }}>Settled</Typography>
                                </Grid>
                                <Grid item xs={1}>
                                    <Typography sx={{ fontWeight: 'bold', fontSize: '14px', marginLeft: '4%' }}>₹35,000</Typography>
                                </Grid>
                            </Grid>
                            <IconButton
                                aria-label="expand row"
                                size="small"
                                onClick={() => setSecondOpen(!openSecond)}
                                sx={{ position: 'absolute', right: 5, marginTop: '-0.3%', backgroundColor: 'white' }}
                            >
                                {openSecond ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
                            </IconButton>
                        </CardContent>
                        <Collapse in={openSecond} timeout="auto" unmountOnExit>
                            <CardContent>
                                <Grid container spacing={5}>
                                    <Grid item xs={1} sx={{ marginLeft: '1%' }}>
                                    </Grid>
                                    <Grid item xs={3}>
                                        <Typography sx={{ fontSize: '14px', marginLeft: '4%' }}>In yet another hallmark judgment reinforcing the pro enforcement bias of the Indian
                                            judiciary, the Supreme Court has categorically emphasized that the restrictive scope of grounds on which enforcement of a foreign award may
                                            be refused in India. This judgment vindicates the New York Convention in letter and spirit and vanquishes the creative attempts of shrewd
                                            award-debtors to resist the enforcement of foreign arbitral awards by compelling the courts to adopt an expansive interpretation of the
                                            specific grounds enumerated in the Act. This judgment may be touted as a parting gift from Hon’ble Mr. Justice R.F. Nariman to the Indian
                                            arbitration regime, which has conspicuously taken large strides in the recent past to resemble the international best practices. The legal
                                            position qua enforcement of foreign awards is now settled for good- Unless a party can readily demonstrate grounds under Section 48(1) or
                                            48(2) of the Act, the award will be enforced in India.</Typography>
                                    </Grid>
                                    <Grid item xs={2}>
                                        <Typography sx={{ fontWeight: 'bold', fontSize: '14px', marginLeft: '4%' }}>vs.</Typography>
                                        <br /><Typography sx={{ fontWeight: 'bold', fontSize: '14px', marginLeft: '4%' }}>Gemini Bay Transcription Pvt. Ltd.</Typography>
                                    </Grid>
                                    <Grid item xs={2}>
                                    </Grid>
                                    <Grid item xs={2}>
                                        <Typography sx={{
                                            fontSize: '14px', marginLeft: '4%', backgroundColor: 'white', borderRadius: '14px',
                                            paddingLeft: '15px'
                                        }}>Helped bring the settlement amount lower for the client.</Typography>
                                    </Grid>
                                    <Grid item xs={1}>
                                    </Grid>
                                </Grid>
                            </CardContent>
                        </Collapse>
                    </Card>
                    <br />
                    <Card elevation={0} sx={{ backgroundColor: '#DBDFEA', borderRadius: '10px', height: '100%' }}>
                        <CardContent sx={{ display: 'flex', position: 'relative' }}>
                            <Grid container spacing={5}>
                                <Grid item xs={1} sx={{ marginLeft: '1%' }}>
                                    <Typography sx={{ fontWeight: 'bold', fontSize: '14px' }}>2991</Typography>
                                </Grid>
                                <Grid item xs={3}>
                                    <Typography sx={{ fontWeight: 'bold', fontSize: '14px', marginLeft: '4%' }}>Certain Iranian Assets</Typography>
                                </Grid>
                                <Grid item xs={2}>
                                    <Typography sx={{ fontWeight: 'bold', fontSize: '14px', marginLeft: '4%' }}>Iran</Typography>
                                </Grid>
                                <Grid item xs={2}>
                                    <Typography sx={{ fontWeight: 'bold', fontSize: '14px', marginLeft: '4%' }}>13-June-2023</Typography>
                                </Grid>
                                <Grid item xs={2}>
                                    <Typography sx={{ fontWeight: 'bold', fontSize: '14px', marginLeft: '4%' }}>Settled</Typography>
                                </Grid>
                                <Grid item xs={1}>
                                    <Typography sx={{ fontWeight: 'bold', fontSize: '14px', marginLeft: '4%' }}>₹100,000</Typography>
                                </Grid>
                            </Grid>
                            <IconButton
                                aria-label="expand row"
                                size="small"
                                onClick={() => setThirdOpen(!openThird)}
                                sx={{ position: 'absolute', right: 5, marginTop: '-0.3%', backgroundColor: 'white' }}
                            >
                                {openThird ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
                            </IconButton>
                        </CardContent>
                        <Collapse in={openThird} timeout="auto" unmountOnExit>
                            <CardContent>
                                <Grid container spacing={5}>
                                    <Grid item xs={1} sx={{ marginLeft: '1%' }}>
                                    </Grid>
                                    <Grid item xs={3}>
                                        <Typography sx={{ fontSize: '14px', marginLeft: '4%' }}>On Mar. 30, the International Court of Justice (ICJ) issued
                                            its judgment on the merits in Certain Iranian Assets, nearly seven years after the case between Iran and the United States was first filed.
                                            The Court found that a number of U.S. actions constituted violations of the Treaty of Amity between Iran and the United States, but that the
                                            2018 termination of the Treaty meant that the Court could only award monetary damages and could not order cessation of the United States’
                                            activities</Typography>
                                    </Grid>
                                    <Grid item xs={2}>
                                        <Typography sx={{ fontWeight: 'bold', fontSize: '14px', marginLeft: '4%' }}>vs.</Typography>
                                        <br /><Typography sx={{ fontWeight: 'bold', fontSize: '14px', marginLeft: '4%' }}>United States</Typography>
                                    </Grid>
                                    <Grid item xs={2}>
                                    </Grid>
                                    <Grid item xs={2}>
                                        <Typography sx={{
                                            fontSize: '14px', marginLeft: '4%', backgroundColor: 'white', borderRadius: '14px',
                                            paddingLeft: '15px'
                                        }}>Helped someone with little knowledge find a favourable outcome in this case.</Typography>
                                    </Grid>
                                    <Grid item xs={1}>
                                    </Grid>
                                </Grid>
                            </CardContent>
                        </Collapse>
                    </Card>
                    <br />
                    <Card elevation={0} sx={{ backgroundColor: '#DBDFEA', borderRadius: '10px', height: '100%' }}>
                        <CardContent sx={{ display: 'flex', position: 'relative' }}>
                            <Grid container spacing={5}>
                                <Grid item xs={1} sx={{ marginLeft: '1%' }}>
                                    <Typography sx={{ fontWeight: 'bold', fontSize: '14px' }}>1236</Typography>
                                </Grid>
                                <Grid item xs={3}>
                                    <Typography sx={{ fontWeight: 'bold', fontSize: '14px', marginLeft: '4%' }}>Gemini Bay Transcription Pvt. Ltd. v Integrated Sales Service Ltd.</Typography>
                                </Grid>
                                <Grid item xs={2}>
                                    <Typography sx={{ fontWeight: 'bold', fontSize: '14px', marginLeft: '4%' }}>Integrated Sales Service Ltd.</Typography>
                                </Grid>
                                <Grid item xs={2}>
                                    <Typography sx={{ fontWeight: 'bold', fontSize: '14px', marginLeft: '4%' }}>10-February-2023</Typography>
                                </Grid>
                                <Grid item xs={2}>
                                    <Typography sx={{ fontWeight: 'bold', fontSize: '14px', marginLeft: '4%' }}>Settled</Typography>
                                </Grid>
                                <Grid item xs={1}>
                                    <Typography sx={{ fontWeight: 'bold', fontSize: '14px', marginLeft: '4%' }}>₹35,000</Typography>
                                </Grid>
                            </Grid>
                            <IconButton
                                aria-label="expand row"
                                size="small"
                                onClick={() => setFifthOpen(!openFifth)}
                                sx={{ position: 'absolute', right: 5, marginTop: '-0.3%', backgroundColor: 'white' }}
                            >
                                {openFifth ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
                            </IconButton>
                        </CardContent>
                        <Collapse in={openFifth} timeout="auto" unmountOnExit>
                            <CardContent>
                                <Grid container spacing={5}>
                                    <Grid item xs={1} sx={{ marginLeft: '1%' }}>
                                    </Grid>
                                    <Grid item xs={3}>
                                        <Typography sx={{ fontSize: '14px', marginLeft: '4%' }}>In yet another hallmark judgment reinforcing the pro enforcement bias of the Indian
                                            judiciary, the Supreme Court has categorically emphasized that the restrictive scope of grounds on which enforcement of a foreign award may
                                            be refused in India. This judgment vindicates the New York Convention in letter and spirit and vanquishes the creative attempts of shrewd
                                            award-debtors to resist the enforcement of foreign arbitral awards by compelling the courts to adopt an expansive interpretation of the
                                            specific grounds enumerated in the Act. This judgment may be touted as a parting gift from Hon’ble Mr. Justice R.F. Nariman to the Indian
                                            arbitration regime, which has conspicuously taken large strides in the recent past to resemble the international best practices. The legal
                                            position qua enforcement of foreign awards is now settled for good- Unless a party can readily demonstrate grounds under Section 48(1) or
                                            48(2) of the Act, the award will be enforced in India.</Typography>
                                    </Grid>
                                    <Grid item xs={2}>
                                        <Typography sx={{ fontWeight: 'bold', fontSize: '14px', marginLeft: '4%' }}>vs.</Typography>
                                        <br /><Typography sx={{ fontWeight: 'bold', fontSize: '14px', marginLeft: '4%' }}>Gemini Bay Transcription Pvt. Ltd.</Typography>
                                    </Grid>
                                    <Grid item xs={2}>
                                    </Grid>
                                    <Grid item xs={2}>
                                        <Typography sx={{
                                            fontSize: '14px', marginLeft: '4%', backgroundColor: 'white', borderRadius: '14px',
                                            paddingLeft: '15px'
                                        }}>Helped bring the settlement amount lower for the client.</Typography>
                                    </Grid>
                                    <Grid item xs={1}>
                                    </Grid>
                                </Grid>
                            </CardContent>
                        </Collapse>
                    </Card>
                    <br />
                    <Card elevation={0} sx={{ backgroundColor: '#DBDFEA', borderRadius: '10px', height: '100%' }}>
                        <CardContent sx={{ display: 'flex', position: 'relative' }}>
                            <Grid container spacing={5}>
                                <Grid item xs={1} sx={{ marginLeft: '1%' }}>
                                    <Typography sx={{ fontWeight: 'bold', fontSize: '14px' }}>2991</Typography>
                                </Grid>
                                <Grid item xs={3}>
                                    <Typography sx={{ fontWeight: 'bold', fontSize: '14px', marginLeft: '4%' }}>Certain Iranian Assets</Typography>
                                </Grid>
                                <Grid item xs={2}>
                                    <Typography sx={{ fontWeight: 'bold', fontSize: '14px', marginLeft: '4%' }}>Iran</Typography>
                                </Grid>
                                <Grid item xs={2}>
                                    <Typography sx={{ fontWeight: 'bold', fontSize: '14px', marginLeft: '4%' }}>13-June-2023</Typography>
                                </Grid>
                                <Grid item xs={2}>
                                    <Typography sx={{ fontWeight: 'bold', fontSize: '14px', marginLeft: '4%' }}>Settled</Typography>
                                </Grid>
                                <Grid item xs={1}>
                                    <Typography sx={{ fontWeight: 'bold', fontSize: '14px', marginLeft: '4%' }}>₹100,000</Typography>
                                </Grid>
                            </Grid>
                            <IconButton
                                aria-label="expand row"
                                size="small"
                                onClick={() => setSixthOpen(!openSixth)}
                                sx={{ position: 'absolute', right: 5, marginTop: '-0.3%', backgroundColor: 'white' }}
                            >
                                {openSixth ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
                            </IconButton>
                        </CardContent>
                        <Collapse in={openSixth} timeout="auto" unmountOnExit>
                            <CardContent>
                                <Grid container spacing={5}>
                                    <Grid item xs={1} sx={{ marginLeft: '1%' }}>
                                    </Grid>
                                    <Grid item xs={3}>
                                        <Typography sx={{ fontSize: '14px', marginLeft: '4%' }}>On Mar. 30, the International Court of Justice (ICJ) issued
                                            its judgment on the merits in Certain Iranian Assets, nearly seven years after the case between Iran and the United States was first filed.
                                            The Court found that a number of U.S. actions constituted violations of the Treaty of Amity between Iran and the United States, but that the
                                            2018 termination of the Treaty meant that the Court could only award monetary damages and could not order cessation of the United States’
                                            activities</Typography>
                                    </Grid>
                                    <Grid item xs={2}>
                                        <Typography sx={{ fontWeight: 'bold', fontSize: '14px', marginLeft: '4%' }}>vs.</Typography>
                                        <br /><Typography sx={{ fontWeight: 'bold', fontSize: '14px', marginLeft: '4%' }}>United States</Typography>
                                    </Grid>
                                    <Grid item xs={2}>
                                    </Grid>
                                    <Grid item xs={2}>
                                        <Typography sx={{
                                            fontSize: '14px', marginLeft: '4%', backgroundColor: 'white', borderRadius: '14px',
                                            paddingLeft: '15px'
                                        }}>Helped someone with little knowledge find a favourable outcome in this case.</Typography>
                                    </Grid>
                                    <Grid item xs={1}>
                                    </Grid>
                                </Grid>
                            </CardContent>
                        </Collapse>
                    </Card>
                    <br />
                </Box>
            </ThemeProvider>
        </>
    )

}