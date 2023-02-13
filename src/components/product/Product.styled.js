import styled from 'styled-components';
import { devices } from '../../styles/globalStyles';

export const Wrapper = styled.div`
  margin: 5rem 0;
  display: grid;
  grid-template-columns: 40% 45%;
  gap: 15%;

  @media ${devices.mobile} {
    grid-template-columns: 1fr;
    margin: 0;
    gap: 1rem;
  }
`;
