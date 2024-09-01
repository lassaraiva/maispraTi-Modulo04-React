import styled from 'styled-components';

export const AppContainer = styled.div`
  display: flex;
  width: 100%;
  height: 100vh;
  background-color: #f0f0f0;
`;

export const MainContent = styled.div`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  min-height: 100vh;
  overflow: hidden;
`;