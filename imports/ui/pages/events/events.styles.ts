import styled from 'styled-components';

const EventsPageLayout = styled.main`
  display: flex;
  flex-direction: column;
`;

const EventsHeader = styled.header`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 5vh;
  background-color: lightgrey;
`;

const EventsLayout = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export { EventsPageLayout, EventsLayout, EventsHeader };
