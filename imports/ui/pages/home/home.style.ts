import styled from 'styled-components';

const HomePageLayout = styled.section`
  display: flex;
  align-items: center;
  flex-direction: column;
  padding-top: 2rem;
`;

const StyledPostList = styled.ul`
  display: flex;
  flex-direction: column;
  width: 80%;
  list-style-type: none;
  justify-content: center;
  align-items: center;
  padding: 0;
`;

const StyledPostListItem = styled.li`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 2rem;
`;

export { HomePageLayout, StyledPostList, StyledPostListItem };
