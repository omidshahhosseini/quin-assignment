import Map from 'components/Map';
import { Select } from 'components/Select';
import terms from 'constants/terms.json';
import { ChangeEvent, useEffect, useState } from 'react';
import { useGetLaunchInfo } from 'services/apis/launch';
import { MapItems } from 'types/Map';
import { LaunchStationPopup } from './LaunchStationPopup';

function HomePage() {
  const [filterBy, setFilterBy] = useState('');
  const [mapData, setMapData] = useState<MapItems>([]);

  const { data, isError } = useGetLaunchInfo();

  useEffect(() => {
    const lauchInfo = data?.data?.results || [];

    const positions: MapItems = lauchInfo.map((info) => ({
      position: [+info.pad.latitude, +info.pad.longitude],
      popup: <LaunchStationPopup launchInfo={info} />,
      agency: info.launch_service_provider.name,
      enabled: true,
      wasSuccessful: info.status.abbrev === 'Success' ? true : false,
    }));

    setMapData(positions);
  }, [data]);

  const resetToShowAllLaunches = () => {
    return mapData.map((item) => {
      item.enabled = true;
      return item;
    });
  };

  const onAgencyFilterChange = (e: ChangeEvent<HTMLSelectElement>) => {
    const { value } = e?.target;
    const newMapData = value
      ? mapData.map((item) => {
          item.enabled = item.agency === value;
          return item;
        })
      : resetToShowAllLaunches();

    setMapData(newMapData);
  };

  const onFilterSelectChange = (e: ChangeEvent<HTMLSelectElement>) => {
    const { value } = e.target;
    if (value === terms.SUCCESSFUL) {
      const newMapData = mapData.map((item) => {
        item.enabled = item.wasSuccessful;
        return item;
      });
      setMapData(newMapData);
    }
    if (!value) {
      const newMapData = resetToShowAllLaunches();
      setMapData(newMapData);
    }

    setFilterBy(value);
  };

  if (isError) return <h2>{terms.ERROR_ON_FETCH_DATA}</h2>;

  return (
    <>
      <Select
        options={[terms.AGENCY, terms.SUCCESSFUL]}
        title={terms.FILTER_BY + ': '}
        onChange={onFilterSelectChange}
      />
      <Select
        options={mapData.map(({ agency }) => agency)}
        title={terms.CHOOSE + ': '}
        onChange={onAgencyFilterChange}
        show={filterBy === terms.AGENCY}
      />
      <Map mapData={mapData?.filter(({ enabled }) => enabled)} />
    </>
  );
}

export default HomePage;
