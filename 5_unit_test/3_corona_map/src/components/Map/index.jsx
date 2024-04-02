import { Link } from 'react-router-dom';
import {
  ZoomableGroup,
  ComposableMap,
  Geographies,
  Geography,
  Sphere,
  Graticule,
} from 'react-simple-maps';

const Map = ({ setTooltipContent }) => {
  const geoUrl = 'https://ismailarilik.com/react-covid-maps/geo.json';

  return (
    <ComposableMap
      height={900}
      projectionConfig={{ rotate: [-10, 0, 0], scale: 147 }}
    >
      <ZoomableGroup>
        <Sphere stroke="gray" strokeWidth={0.5} />
        <Graticule stroke="gray" strokeWidth={0.5} />
        <Geographies geography={geoUrl}>
          {({ geographies }) =>
            geographies.map((geo) => {
              return (
                <Link
                  to={`/detail/${geo.id}`}
                  className="focus:outline-none"
                  key={geo.rsmKey}
                >
                  <Geography
                    geography={geo}
                    onMouseEnter={() => setTooltipContent(geo.properties.name)}
                    onMouseLeave={() => setTooltipContent('')}
                    style={{
                      default: {
                        fill: 'white',
                      },
                      hover: {
                        fill: 'rgb(54 197 94)',
                      },
                    }}
                  />
                </Link>
              );
            })
          }
        </Geographies>
      </ZoomableGroup>
    </ComposableMap>
  );
};

export default Map;
