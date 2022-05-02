import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import PageTitle from '../../../shared/components/PageTitle';
import EsMuiTextArea from '../../../shared/components/EsMuiTextArea';
import EsMuiSelect from '../../../shared/components/EsMuiSelect';
import EsMuiSelectCustomLabel from '../../../shared/components/EsMuiSelectCustomLabel';

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

export default function CreateSentence() {

    const [topic, setTopic] = React.useState('t0000');
    const [pattern, setPattern] = React.useState('p0000');

    const handleTopicChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setTopic(event.target.value);
    };

    const handlePatternChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setPattern(event.target.value);
    };

    return (
        <React.Fragment>
            <PageTitle title='新增句子' />
            <Box sx={{ minWidth: 275 }}>
                {/* TODO: 拆成變數或FUNTION */}
                <Card sx={{ mb: '15px', pb: '15px' }}>
                    <CardContent sx={{ pb: '5px' }}>
                        <Stack spacing={2}>
                            <EsMuiSelect
                                id="topic-select"
                                label="主題"
                                value={topic}
                                handleValueChange={handleTopicChange}
                                list={TOPIC_LIST} />
                            <EsMuiSelectCustomLabel
                                id="pattern-select"
                                label="句型"
                                value={pattern}
                                handleValueChange={handlePatternChange}>
                                {PATTERN_LIST.map((option) => (
                                    <MenuItem key={option.id} value={option.id}>
                                        <p className="english-font-family m0">{option.englishPattern}</p>
                                        {option.chinesePattern}
                                    </MenuItem>
                                ))}
                            </EsMuiSelectCustomLabel>
                            <EsMuiTextArea
                                id="english-sentence-input"
                                label="英文句子"
                                rows={6} />
                            <EsMuiTextArea
                                id="chinese-sentence-input"
                                label="本句中文翻譯"
                                rows={6} />
                        </Stack>
                    </CardContent>
                    <CardActions sx={{ flexDirection: 'column' }}>
                        <Button variant="contained">新增</Button>
                    </CardActions>
                </Card>
            </Box>
        </React.Fragment>
    )
}
