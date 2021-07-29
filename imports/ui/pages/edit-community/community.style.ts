import styled from 'styled-components';
import { StyledBox } from '../communities/community-list/community-list.style';

const CommunityLayout = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const CommunityHeader = styled.header`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 5vh;
  background-color: lightgrey;
`;

const StyledPost = styled(StyledBox)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 1rem;
  border: 1px solid black;
`;

export { CommunityLayout, CommunityHeader, StyledPost };
