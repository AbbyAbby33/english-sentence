import * as React from 'react';
import styled from '@emotion/styled';
import { jsx, css } from '@emotion/react'
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function SentenceList() {

    const PATTERN_LIST = [
        {
            id: 'p0000', englishPattern: 'Is this...?', chinesePattern: '請問是...？', list: [
                { id: 's0000', englishSentence: 'Is this Mr. Wang?', chineseSentence: '請問是王先生嗎？' },
                { id: 's0001', englishSentence: 'Is this the front desk?', chineseSentence: '請問是服務台嗎？' }
            ]
        },
        {
            id: 'p0001', englishPattern: 'This is...speaking.', chinesePattern: '是...接聽。', list: [
                { id: 's0002', englishSentence: 'This is he/she.', chineseSentence: '..............' },
                { id: 's0003', englishSentence: 'This is Vicky speaking.', chineseSentence: '..............' }
            ]
        },
        {
            id: 'p0002', englishPattern: 'This is a call from...', chinesePattern: '是...打來的。', list: [
                { id: 's0004', englishSentence: 'This is a call from Ms. Chen.', chineseSentence: '..............' },
                { id: 's0005', englishSentence: 'This is a call from you client.', chineseSentence: '..............' },
                { id: 's0006', englishSentence: 'This is a call from Singapore.', chineseSentence: '..............' },
                { id: 's0007', englishSentence: 'This is a call from the manager.', chineseSentence: '..............' }
            ]
        },
        {
            id: 'p9999', englishPattern: 'Other', chinesePattern: '其他', list: [
                { id: 's0008', englishSentence: "I think you've dialed the wrong number.", chineseSentence: '我想你打錯電話了' }
            ]
        },
    ];

    /** 標題sytle */
    const Title = styled.h1`
                        text-align: center;
                        margin: 0 0 15px;
                    `;

    /** 句型卡sytle */
    const CardStyle = styled(Card)(({ theme }) => ({
        // 句型標題組        
        '& .sentence-pattern-wrap': {
            margin: '0 0 16px',
            '& .sentence-pattern': {
                padding: '6px 10px',
                background: '#dcdbc9',
                borderLeft: '2px solid #16504b',

                '& h2': {
                    margin: '0 0 3px',
                    fontSize: '22px'
                },
                '& p': {
                    margin: '0 0 6px'
                },
            }
        },
        '& .english-sentence': {
            margin: '0 0 3px',
            fontSize: '18px',
            fontWeight: '700'
        },
        '& .chinese-sentence': {
            margin: '0 0 10px'
        }
    }));

    return (
        <React.Fragment>
            <Title>句型</Title>
            {PATTERN_LIST.map(v => {
                return (
                    <Box key={v.id} sx={{ minWidth: 275 }}>
                        {/* TODO: 拆成變數或FUNTION */}
                        <CardStyle sx={{ mb: "15px" }}>
                            <CardContent>
                                <div className="sentence-pattern-wrap">
                                    <div className="sentence-pattern">
                                        <h2>{v.englishPattern}</h2>
                                        <p>{v.chinesePattern}</p>
                                    </div>
                                </div>
                                {v.list.map(s => {
                                    return (
                                        <React.Fragment key={s.id}>
                                            <Typography className="english-sentence">
                                                {s.englishSentence}
                                            </Typography>
                                            <Typography className="chinese-sentence" color="text.secondary">
                                                {s.chineseSentence}
                                            </Typography>
                                        </React.Fragment>
                                    )
                                })}
                            </CardContent>
                        </CardStyle>
                    </Box>
                )
            })}
        </React.Fragment>
    )
}
