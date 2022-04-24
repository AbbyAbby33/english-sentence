import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import styled from '@emotion/styled';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';

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
    { id: 't0011', name: '議題搞論' },
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

export default function MenuMatain() {

    const [value, setValue] = React.useState(0);

    const topicRows = TOPIC_LIST.map(v => {
        return createTableRow(v.id, v.name);
    });

    const patternRows = PATTERN_LIST.map(v => {
        return createPatternTableRow(v.id, v.englishPattern, v.chinesePattern);
    });

    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        setValue(newValue);
    };

    const topicList = (

        <TableContainer component={Paper}>
            <Table aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell>編號</TableCell>
                        <TableCell>主題</TableCell>
                        <TableCell>操作</TableCell>
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
        <TableContainer component={Paper} sx={{ minWidth: '340px' }}>
            <Table aria-label="simple table" stickyHeader>
                <TableHead>
                    <TableRow>
                        <TableCell>編號</TableCell>
                        <TableCell>句型</TableCell>
                        <TableCell>操作</TableCell>
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
                                {row.englishPattern}
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
                        <Tab label="主題列表" {...a11yProps(0)} />
                        <Tab label="句型列表" {...a11yProps(1)} />
                    </Tabs>
                </Box>
                <TabPanel value={value} index={0}>
                    {topicList}
                </TabPanel>
                <TabPanel value={value} index={1}>
                    <Box sx={{ overflowX: 'scroll', boxShadow: '0px 2px 1px -1px rgb(0 0 0 / 20%), 0px 1px 1px 0px rgb(0 0 0 / 14%), 0px 1px 3px 0px rgb(0 0 0 / 12%)' }}>
                        {patternList}
                    </Box>
                </TabPanel>
            </Box>
        </React.Fragment>

    )
}