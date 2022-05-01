import React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { styled as muiStyled } from '@mui/material/styles';

interface PatternCardInterface {
    key: string;
    id: string;
    englishPattern: string;
    chinesePattern: string;
    list: Array<SentenceInterface>;
}

interface SentenceInterface {
    key?: string;
    id: string;
    englishSentence: string;
    chineseSentence: string;
}

export default function PatternCard(props: PatternCardInterface) {
    const { id, englishPattern, chinesePattern, list } = props;

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
    }));

    return (
        <Box key={id} sx={{ minWidth: 275 }}>
            <CardStyle sx={{ mb: "15px" }}>
                <CardContent>
                    <div className="sentence-pattern-wrap">
                        <div className="sentence-pattern">
                            <h2 className="english-font-family">{englishPattern}</h2>
                            <p>{chinesePattern}</p>
                        </div>
                    </div>
                    {list.map(s => {
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
}
