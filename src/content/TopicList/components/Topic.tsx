// import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';
import { styled as muiStyled } from '@mui/material/styles';
import Button from '@mui/material/Button';

interface TopicInterface {
    id: string;
    name: string;
    key: string;
}

export default function Topic(props: TopicInterface) {
    const { name, id } = props;

    // 筆記：一開始是用emotion的styled()寫的，後來因為想使用mui的theme的顏色定義，所以改用mui包裝的styled()寫
    // const Button = styled.div`
    //                     @media (max-width: 600px) {
    //                         width: calc(50% - 6px);
    //                     }
    //                     @media (min-width: 601px) and (max-width: 900px) {
    //                         width: calc(25% - 6px);
    //                     }
    //                     display: inline-block;
    //                     color: turquoise;
    //                     width: calc(12.5% - 6px);
    //                     background: #333;
    //                     text-align: center;
    //                     padding: 10px;
    //                     box-sizing: border-box;
    //                     margin: 0 3px 6px;
    //                     border-radius: 3px;
    //                 `

    // const DarkStyledButton = muiStyled('button')(({ theme }) => ({
    const DarkStyledButton = muiStyled(Button)(({ theme }) => ({
        width: 'calc(50% - 6px)',
        [theme.breakpoints.up('md')]: {
            width: 'calc(25% - 6px)',
        },
        [theme.breakpoints.up('lg')]: {
            width: 'calc(12.5% - 6px)',
        },
        background: theme.palette.info.main,
        color: '#fff',
        textAlign: 'center',
        padding: '10px',
        boxSizing: 'border-box',
        margin: '0 3px 6px',
        borderradius: '3px',
        fontSize: '1rem',
        '&:hover': {
            backgroundColor: theme.palette.info.darker,
        },
    }));

    return (
        <NavLink to={`${id}`}>
            {/* <Button>{name}</Button> */}
            <DarkStyledButton>{name}</DarkStyledButton>
        </NavLink>
    )
}
