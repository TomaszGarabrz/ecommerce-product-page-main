import React from 'react';
import styled from 'styled-components';
import Header from './components/header/Header';
import Product from './components/product/Product';
import { devices } from './styles/globalStyles';

const App = () => {
  return (
    <Wrapper>
      <Header />
      <Product />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 1200px;
  margin: 2rem auto;

  @media ${devices.mobile} {
    width: 100%;
    margin: 0;
  }
`;

export default App;
