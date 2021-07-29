import styled from 'styled-components';

const StyledBox = styled.div`
  box-sizing: border-box;
  line-height: 1.43;
  padding: 1rem;
  color: rgb(0, 0, 0);
  border: 1px solid rgb(207, 203, 202);
  background-color: rgb(255, 255, 255);
  transition-duration: 0.15s;
  transition-timing-function: ease-in-out;
  transition-property: border-color, box-shadow, transform;
  border-radius: 8px;
  height: 100%;
  width: 50%;
  width: 100%;

  &:hover {
    transform: translateY(-1px);
    box-shadow: rgb(0 0 0 / 7%) 0px 8px 10px 1px,
      rgb(0 0 0 / 6%) 0px 3px 14px 2px, rgb(0 0 0 / 10%) 0px 5px 5px -3px;
    border-color: rgba(0, 0, 0, 0);
    cursor: pointer;
  }
`;

const StyledCommunityList = styled.ul`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  list-style-type: none;
  justify-content: space-evenly;
  padding: 0;
  justify-content: flex-start;
`;

const StyledListItem = styled.li`
  display: flex;
  flex-direction: column;
  margin: 1rem 1rem;
`;

export { StyledBox, StyledCommunityList, StyledListItem };
