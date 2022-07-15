import styled from 'styled-components';

const Wrapper = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

const Ineer = styled.div`
  padding: 25px;
`;

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 20px;
`;

const LaunchItem = styled.div`
  padding: 10px;
  border-radius: 5px;
  box-shadow: 0 0px 4px #c4c4c4;
`;

export { Wrapper, Ineer, Container, LaunchItem };
