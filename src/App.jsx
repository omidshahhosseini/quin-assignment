import React, { useEffect, useState } from 'react';
import { Wrapper, Ineer, Container, LaunchItem } from 'styled';
import { useGetRandomGif } from 'services/apis/launch';
import { Map } from 'components/Map';

function App() {
  const [filterBy, setFilterBy] = useState('');
  const [mapData, setMapData] = useState([]);

  const { data, isLoading, isError } = useGetRandomGif();
  console.log(data);

  useEffect(() => {
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
        agency: launch_service_provider.name,
        enabled: true,
      })
    );

    setMapData(positions);
  }, [data]);

  const onAgencyFilterChange = (e) => {
    const { value } = e.target;
    const newMapData = mapData.map((item) => {
      if (item.agency === value) {
        item.enabled = true;
      } else {
        item.enabled = false;
      }

      return item;
    });
    setMapData(newMapData);
  };

  if (isError) return <h2>Error in getting data from the API</h2>;

  return (
    <div className="App">
      <Wrapper>
        <Ineer>
          <Container>
            <div>
              filter by:
              <select
                name="filterBy"
                onChange={(e) => setFilterBy(e.target.value)}>
                <option value=""></option>
                <option value="Agency">Agency</option>
              </select>
              {filterBy === 'Agency' && (
                <select onChange={onAgencyFilterChange}>
                  {mapData.map(({ agency }, i) => (
                    <option key={i} value={agency}>
                      {agency}
                    </option>
                  ))}
                </select>
              )}
            </div>
            <Map mapData={mapData?.filter(({ enabled }) => enabled)} />
          </Container>
        </Ineer>
      </Wrapper>
    </div>
  );
}

export default App;
