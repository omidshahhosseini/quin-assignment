import terms from 'constants/terms.json';

type LaunchInfoType = {
  name: string;
  pad: {
    name: string;
  };
  window_start: string;
  launch_service_provider: {
    name: string;
  };
};

type LaunchStationPopupType = {
  launchInfo: LaunchInfoType;
};

export const LaunchStationPopup = ({ launchInfo }: LaunchStationPopupType) => {
  const { pad, name, window_start, launch_service_provider } = launchInfo;

  return (
    <>
      <div>
        {terms.NAME}: {name}
      </div>
      <div>
        {terms.NAME_OF_LAUNCH_PAD}: {pad.name}
      </div>
      <div>
        {terms.TIME_OF_LAUNCH}: {window_start}
      </div>
      <div>
        {terms.AGENCY}: {launch_service_provider.name}
      </div>
    </>
  );
};
