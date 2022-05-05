import React from 'react';
import styled from '@emotion/styled';

interface TitleInterface {
    title: string;
    /** 是否有子標題 */
    withSubTitle?: boolean;
}

export default function PageTitle(props: TitleInterface) {
    const { title, withSubTitle } = props;
    const Title = styled.h1`
                        text-align: center;
                        margin: ${withSubTitle ? '0': '0 0 15px'};
                        font-size: 28px;
                    `;

    return (
        <Title>{title}</Title>
    )
};
