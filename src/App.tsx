import React from 'react';
import { Wrapper, Ineer, Container, LaunchItem } from 'styled';
import { useGetRandomGif } from 'services/apis/launch';
import { Map } from 'components/Map';

function App() {
  const { data, isLoading } = useGetRandomGif();
  console.log(data);
  const positions = data?.data?.results?.map(({ pad }: any) => [
    +pad.latitude,
    +pad.longitude,
  ]);

  return (
    <div className="App">
      <Wrapper>
        <Ineer>
          <Container>
            <Map positions={positions} />
            {/* {isLoading ? (
              <h1>Loading...</h1>
            ) : (
              data?.data?.results.map((value: any, index: any) => {
                return <LaunchItem key={index}>{value.name}</LaunchItem>;
              })
            )} */}
          </Container>
        </Ineer>
      </Wrapper>
    </div>
  );
}

export default App;
