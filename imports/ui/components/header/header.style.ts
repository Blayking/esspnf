import { Menu } from 'antd';
import styled from 'styled-components';

const StyledHeader = styled(Menu)`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const StyledNavLinks = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 30%;
`;

const StyledUserActions = styled.section`
  display: flex;
  align-items: center;
  width: 40%;
  justify-content: space-around;
`;

export { StyledHeader, StyledNavLinks, StyledUserActions };
