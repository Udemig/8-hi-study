import { useState } from 'react';
import Map from '../../components/Map';

const MapPage = () => {
  const [tooltipContent, setTooltipContent] = useState('');

  return (
    <div className="h-[calc(100vh-74px)] bg-zinc-800 text-white  overflow-hidden flex flex-col justify-center items-center wrapper md:pt-20">
      <h6 className="px-6 pb-6 ">Detay Görüntüle: {tooltipContent}</h6>
      <Map setTooltipContent={setTooltipContent} />
    </div>
  );
};

export default MapPage;
