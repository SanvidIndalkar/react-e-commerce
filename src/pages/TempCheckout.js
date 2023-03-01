import React from 'react';
import { PageHero } from '../components';
import styled from 'styled-components';

const TempCheckout=()=>{
    return <>
    <PageHero title='checkout'/>

    <Wrapper className='page'>checkout functionality will be added soon</Wrapper>
    </>
}

const Wrapper = styled.main`
display:flex;
aligh-items:center;
justify-content: center;
font-size:30px;
`
export default TempCheckout;