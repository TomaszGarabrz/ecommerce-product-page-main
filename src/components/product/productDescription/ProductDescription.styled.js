import styled from 'styled-components';
import { colors, devices } from '../../../styles/globalStyles';

export const Wrapper = styled.div`
  height: 80%;
  margin: auto 0;
  display: flex;
  flex-direction: column;
  gap: 1rem;

  @media ${devices.mobile} {
    margin: 0 1rem;
  }
`;

export const CompanyParagraph = styled.p`
  text-transform: uppercase;
  color: ${colors.orange};
  font-weight: bold;
`;
export const ProductTitle = styled.h1`
  font-size: 3rem;

  @media ${devices.mobile} {
    font-size: 2rem;
  }
`;

export const Paragraph = styled.p`
  text-align: justify;
  color: ${colors.graylishBlue};
  line-height: 1.25;

  @media ${devices.mobile} {
    line-height: 1.5;
  }
`;
export const PriceBoxWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.25rem;

  @media ${devices.mobile} {
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  }
`;

export const PriceParagraph = styled.p`
  font-size: 1.5rem;
  font-weight: bold;
  display: flex;
  align-items: center;
  gap: 0.5rem;

  @media ${devices.mobile} {
    font-size: 2rem;
  }

  span {
    font-size: 0.9rem;
    background-color: ${colors.paleOrange};
    padding: 0.2rem;
    color: ${colors.orange};
    border-radius: 5px;
  }
`;
export const OldPriceParagraph = styled.p`
  color: ${colors.graylishBlue};
  font-weight: bold;

  @media ${devices.mobile} {
    text-decoration: line-through;
  }
`;

export const ActionsWrapper = styled.div`
  display: flex;
  gap: 1rem;

  @media ${devices.mobile} {
    flex-direction: column;
  }
`;
export const QuantityWrapper = styled.div`
  display: flex;
  flex-basis: 30%;
  background-color: ${colors.lightgraylishBlue};
  border-radius: 5px;
  justify-content: space-between;
  align-items: center;
  overflow: hidden;

  @media ${devices.mobile} {
    padding: 1.5rem;
  }
`;

export const QuantityParagraph = styled.p`
  width: 100%;
  text-align: center;
  font-weight: bold;
`;
export const Button = styled.button`
  width: 100%;
  padding: 1rem 0.5rem;
  background: none;
  border: none;
  cursor: pointer;
  color: ${colors.orange};
  font-weight: bold;
  font-size: 1rem;

  @media ${devices.mobile} {
    font-size: 2rem;
    width: 10%;
  }
`;

export const AddChartButton = styled.button`
  flex-basis: 70%;
  background-color: ${colors.orange};
  border-radius: 10px;
  border: none;
  color: #fff;
  font-weight: bold;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  cursor: pointer;

  @media ${devices.mobile} {
    flex-basis: 40%;
  }

  svg {
    transform: scale(0.9);

    path {
      fill: #fff;
    }
  }
`;
