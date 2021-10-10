import React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { LIGHT_THEME } from './theme';
import { Transactions } from './transactions/Transactions';
import logo from './logo.svg';

export const App = () => {
  return (
    <ThemeProvider theme={LIGHT_THEME}>
      <StyledApp>
        <StyledNavigation>
          <StyledLogo src={logo} />
        </StyledNavigation>
        <StyledMain>
          <StyledCard>
            <Transactions userId="Fake-ID" />
          </StyledCard>
        </StyledMain>
      </StyledApp>
    </ThemeProvider>
  );
};

const StyledApp = styled.div`
  display: flex;
  height: 100vh;
  overflow: hidden;
  color: ${({ theme }) => theme.text};
  font-family: sans-serif;
`;

const StyledNavigation = styled.nav`
  background-color: ${({ theme }) => theme.surface};
  color: white;
  height: 100vh;
  width: 80px;
  max-width: 80px;
  flex: 0 0 80px;
  padding-top: 16px;
  border-right: 1px solid ${({ theme }) => theme.surfaceStroke};
`;

const StyledMain = styled.main`
  background-color: ${({ theme }) => theme.background};
  padding: 32px;
  flex: 1 0 auto;
  display: flex;
  align-items: flex-start;
  overflow: scroll;
`;

const StyledCard = styled.div`
  background-color: ${({ theme }) => theme.surface};
  padding: 32px;
  flex: 1 0 auto;
  border: 1px solid ${({ theme }) => theme.surfaceStroke};
  border-radius: 24px;

  flex: 1 0 auto;
`;

const StyledLogo = styled.img`
  width: 100%;
`;
