import React from 'react';
import PageTitle from '../../../shared/components/PageTitle';
import styled from '@emotion/styled';

export default function Home() {

    const SubTitle = styled.p`
        text-align: center;
        margin: 0;
    `;

    return (
        <React.Fragment>
            <PageTitle title='千里之行始於足下' withSubTitle/>
            <SubTitle>A thousand miles begins with a single step.</SubTitle>
        </React.Fragment>
    )
}
