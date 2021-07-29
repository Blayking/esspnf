import styled from 'styled-components';
import { StyledBox } from '../communities/community-list/community-list.style';

const ProductsLayout = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ProductsHeader = styled.header`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 5vh;
  background-color: lightgrey;
`;

const StyledProduct = styled(StyledBox)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 1rem;
  border: 1px solid black;
`;

export { ProductsHeader, ProductsLayout, StyledProduct };
