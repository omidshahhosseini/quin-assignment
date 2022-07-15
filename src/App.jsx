import React from 'react';
import { Wrapper, Ineer, Container, LaunchItem } from 'styled';
import { useGetRandomGif } from 'services/apis/launch';
import { Map } from 'components/Map';

function App() {
  const { data, isLoading, isError } = useGetRandomGif();
  console.log(data);
  const positions = data?.data?.results?.map(
    ({ pad, name, window_start, launch_service_provider }) => ({
      position: [+pad.latitude, +pad.longitude],
      popup: (
        <>
          <div>Name: {name}</div>
          <div>Name of the launch pad: {pad.name}</div>
          <div>Time of launch: {window_start}</div>
          <div>Agency: {launch_service_provider.name}</div>
        </>
      ),
    })
  );

  if (isError) return <h2>Error in getting data from the API</h2>;

  return (
    <div className="App">
      <Wrapper>
        <Ineer>
          <Container>
            <Map mapData={positions} />
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
