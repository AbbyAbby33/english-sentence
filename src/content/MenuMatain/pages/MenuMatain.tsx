import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import PageTitle from '../../../shared/components/PageTitle';
import EsMuiSelect from '../../../shared/components/EsMuiSelect';
import TopicListTable from '../components/TopicListTable';
import PatternListTable from '../components/PatternListTable';

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

export default function MenuMatain() {

    const [value, setValue] = React.useState(0);
    const [topic, setTopic] = React.useState('t0000');

    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        setValue(newValue);
    };

    const handleTopicChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setTopic(event.target.value);
    };

    return (
        <React.Fragment>
            <PageTitle title='目錄維護' />
            <Box sx={{ width: '100%', bgcolor: '#fff', borderRadius: '4px' }}>
                <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                    <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
                        <Tab label="主題維護" {...a11yProps(0)} />
                        <Tab label="句型維護" {...a11yProps(1)} />
                    </Tabs>
                </Box>
                <TabPanel value={value} index={0}>
                    <TopicListTable topicList={TOPIC_LIST} />
                </TabPanel>
                <TabPanel value={value} index={1}>
                    <Stack spacing={2}>
                        <EsMuiSelect
                            id="topic-select"
                            label="主題"
                            value={topic}
                            handleValueChange={handleTopicChange}
                            list={TOPIC_LIST} />
                        <Box sx={{ overflowX: 'scroll', boxShadow: '0px 2px 1px -1px rgb(0 0 0 / 20%), 0px 1px 1px 0px rgb(0 0 0 / 14%), 0px 1px 3px 0px rgb(0 0 0 / 12%)' }}>
                            <PatternListTable patternList={PATTERN_LIST} />
                        </Box>
                    </Stack>
                </TabPanel>
            </Box>
        </React.Fragment>
    )
}
