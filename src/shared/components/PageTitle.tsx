import React from 'react';
import styled from '@emotion/styled';

interface TitleInterface {
    title: string;
}

export default function PageTitle(props: TitleInterface) {
    const { title } = props;
    const Title = styled.h1`
                        text-align: center;
                        margin: 0 0 15px;
                        font-size: 28px;
                    `;

    return (
        <Title>{title}</Title>
    )
};
