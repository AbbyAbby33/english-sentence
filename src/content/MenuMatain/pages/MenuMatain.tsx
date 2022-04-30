import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import styled from '@emotion/styled';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import Stack from '@mui/material/Stack';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { styled as muiStyled } from '@mui/material/styles';

interface TabPanelProps {
    children?: React.ReactNode;
    index: number;
    value: number;
}

function TabPanel(props: TabPanelProps) {
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
                    {children}
                </Box>
            )}
        </div>
    );
}


function a11yProps(index: number) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}

/** 標題sytle */
const Title = styled.h1`
                        text-align: center;
                        margin: 0 0 15px;
                        font-size: 28px;
                    `;

const TOPIC_LIST = [
    { id: 't0000', name: '打招呼' },
    { id: 't0001', name: '邀請' },
    { id: 't0002', name: '道別' },
    { id: 't0003', name: '接聽電話' },
    { id: 't0004', name: '預約' },
    { id: 't0005', name: '商業用語' },
    { id: 't0006', name: '財務' },
    { id: 't0007', name: '工作' },
    { id: 't0008', name: '道歉' },
    { id: 't0009', name: '談判' },
    { id: 't0010', name: '開會' },
    { id: 't0011', name: '議題討論' },
    { id: 't0012', name: '表達意見' },
];

const PATTERN_LIST = [
    { id: 'p0000', englishPattern: 'Is this...?', chinesePattern: '請問是...？' },
    { id: 'p0001', englishPattern: 'This is...speaking.', chinesePattern: '是...接聽。' },
    { id: 'p0002', englishPattern: 'This is a call from...', chinesePattern: '是...打來的。' },
    { id: 'p9999', englishPattern: 'Other', chinesePattern: '其他' }
];

/** 新增MUI表格的列資料 */
function createTableRow(
    id: string,
    name: string
) {
    const operate =
        (
            <div>
                <EditIcon sx={{ marginRight: '6px' }}></EditIcon>
                <DeleteIcon></DeleteIcon>
            </div>
        );
    return { id, name, operate };
}

/** 新增MUI表格的列資料 */
function createPatternTableRow(
    id: string,
    englishPattern: string,
    chinesePattern: string
) {
    const operate =
        (
            <div>
                <EditIcon sx={{ marginRight: '6px' }}></EditIcon>
                <DeleteIcon></DeleteIcon>
            </div>
        );
    return { id, englishPattern, chinesePattern, operate };
}

const StyledTableCell = muiStyled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
        backgroundColor: theme.palette['title-background'].main,
        padding: '10px 16px' 
    }
}));

export default function MenuMatain() {

    const [value, setValue] = React.useState(0);
    const [topic, setTopic] = React.useState('t0000');

    const topicRows = TOPIC_LIST.map(v => {
        return createTableRow(v.id, v.name);
    });

    const patternRows = PATTERN_LIST.map(v => {
        return createPatternTableRow(v.id, v.englishPattern, v.chinesePattern);
    });

    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        setValue(newValue);
    };

    const handleTopicChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setTopic(event.target.value);
    };

    const topicList = (

        <TableContainer component={Paper}>
            <Table aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <StyledTableCell style={{ width: '70px' }}>編號</StyledTableCell>
                        <StyledTableCell>主題</StyledTableCell>
                        <StyledTableCell style={{ width: '90px' }}>操作</StyledTableCell>
                        {/* <TableCell align="center">操作</TableCell> */}
                    </TableRow>
                </TableHead>
                <TableBody>
                    {topicRows.map((row, i) => (
                        <TableRow
                            key={row.id}
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                            <TableCell>{i + 1}</TableCell>
                            <TableCell component="th" scope="row">
                                {row.name}
                            </TableCell>
                            <TableCell>{row.operate}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );

    const patternList = (
        <TableContainer component={Paper} sx={{ minWidth: '400px' }}>
            <Table aria-label="simple table" stickyHeader>
                <TableHead>
                    <TableRow>
                        <StyledTableCell style={{ width: '70px' }}>編號</StyledTableCell>
                        <StyledTableCell>句型</StyledTableCell>
                        <StyledTableCell style={{ width: '90px' }}>操作</StyledTableCell>
                        {/* <TableCell align="center">操作</TableCell> */}
                    </TableRow>
                </TableHead>
                <TableBody>
                    {patternRows.map((row, i) => (
                        <TableRow
                            key={row.id}
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                            <TableCell>{i + 1}</TableCell>
                            <TableCell component="th" scope="row">
                                <p className="english-font-family m0">{row.englishPattern}</p>
                                {row.chinesePattern}
                            </TableCell>
                            <TableCell>{row.operate}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );

    return (
        <React.Fragment>
            <Title>目錄維護</Title>
            <Box sx={{ width: '100%', bgcolor: '#fff', borderRadius: '4px' }}>
                <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                    <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
                        <Tab label="主題維護" {...a11yProps(0)} />
                        <Tab label="句型維護" {...a11yProps(1)} />
                    </Tabs>
                </Box>
                <TabPanel value={value} index={0}>
                    {topicList}
                </TabPanel>
                <TabPanel value={value} index={1}>
                    <Stack spacing={2}>
                        <TextField
                            sx={{ width: '100%' }}
                            id="outlined-select-currency"
                            select
                            label="主題"
                            value={topic}
                            onChange={handleTopicChange}
                        >
                            {TOPIC_LIST.map((option) => (
                                <MenuItem key={option.id} value={option.id}>
                                    {option.name}
                                </MenuItem>
                            ))}
                        </TextField>
                        <Box sx={{ overflowX: 'scroll', boxShadow: '0px 2px 1px -1px rgb(0 0 0 / 20%), 0px 1px 1px 0px rgb(0 0 0 / 14%), 0px 1px 3px 0px rgb(0 0 0 / 12%)' }}>
                            {patternList}
                        </Box>
                    </Stack>


                </TabPanel>
            </Box>
        </React.Fragment>

    )
}
