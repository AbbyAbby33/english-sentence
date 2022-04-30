import * as React from 'react';
import styled from '@emotion/styled';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { styled as muiStyled } from '@mui/material/styles';

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
                { id: 's0002', englishSentence: 'This is he/she.', chineseSentence: '我就是。' },
                { id: 's0003', englishSentence: 'This is Vicky speaking.', chineseSentence: '我是Vicky。' }
            ]
        },
        {
            id: 'p0002', englishPattern: 'This is a call from...', chinesePattern: '是...打來的。', list: [
                { id: 's0004', englishSentence: 'This is a call from Ms. Chen.', chineseSentence: '陳小姐來電。' },
                { id: 's0005', englishSentence: 'This is a call from you client.', chineseSentence: '你的客戶來電。' },
                { id: 's0006', englishSentence: 'This is a call from Singapore.', chineseSentence: '這是從新加坡打來的電話。' },
                { id: 's0007', englishSentence: 'This is a call from the manager.', chineseSentence: '這是經理的來電。' }
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
                        font-size: 28px;
                    `;

    /** 句型卡sytle */
    const CardStyle = muiStyled(Card)(({ theme }) => ({
        // 句型標題組        
        '& .sentence-pattern-wrap': {
            margin: '0 0 16px',
            '& .sentence-pattern': {
                padding: '6px 10px',
                background: theme.palette['title-background'].main,
                borderLeft: `2px solid ${theme.palette.primary.main}`,
                borderRadius: '6px',

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
        },
        '& .english-font-family': {
            fontFamily: `'Roboto Mono', 'serif', 'Segoe UI', 'Roboto'`
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
                                        <h2 className="english-font-family">{v.englishPattern}</h2>
                                        <p>{v.chinesePattern}</p>
                                    </div>
                                </div>
                                {v.list.map(s => {
                                    return (
                                        <React.Fragment key={s.id}>
                                            <Typography className="english-sentence english-font-family">
                                                {s.englishSentence}
                                            </Typography>
                                            <Typography className="chinese-sentence">
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
