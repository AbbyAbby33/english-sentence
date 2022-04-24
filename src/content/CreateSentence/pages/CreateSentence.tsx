import * as React from 'react';
import styled from '@emotion/styled';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';

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

    const handleTopicChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setTopic(event.target.value);
    };

    const handlePatternChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setPattern(event.target.value);
    };

    /** 標題sytle */
    const Title = styled.h1`
                        text-align: center;
                        margin: 0 0 15px;
                        font-size: 28px;
                    `;

    return (
        <React.Fragment>
            <Title>新增句子</Title>
            <Box sx={{ minWidth: 275 }}>
                {/* TODO: 拆成變數或FUNTION */}
                <Card sx={{ mb: '15px', pb: '15px' }}>
                    <CardContent sx={{ pb: '5px' }}>
                        <Stack spacing={2}>
                            <TextField
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
                            <TextField
                                id="outlined-select-currency"
                                select
                                label="句型"
                                value={pattern}
                                onChange={handlePatternChange}
                            >
                                {PATTERN_LIST.map((option) => (
                                    <MenuItem key={option.id} value={option.id}>
                                        <p className="english-font-family m0">{option.englishPattern}</p>
                                        {option.chinesePattern}
                                    </MenuItem>
                                ))}
                            </TextField>
                            <TextField
                                fullWidth
                                id="english-sentence-input"
                                label="英文句子"
                                type="text"
                                multiline
                                rows={6}
                            />
                            <TextField
                                fullWidth
                                id="chinese-sentence-input"
                                label="本句中文翻譯"
                                type="text"
                                multiline
                                rows={6}
                            />
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
