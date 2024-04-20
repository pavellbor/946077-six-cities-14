import { Map, MapOptions, TileLayer } from 'leaflet';
import { MutableRefObject, useEffect, useRef, useState } from 'react';

function useMap(
  mapRef: MutableRefObject<HTMLElement | null>,
  mapOptions: MapOptions
) {
  const [map, setMap] = useState<Map | null>(null);
  const isRenderedRef = useRef<boolean>(false);

  useEffect(() => {
    if (mapRef.current !== null && !isRenderedRef.current) {
      const instance = new Map(mapRef.current, mapOptions);

      const layer = new TileLayer(
        'https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png',
        {
          attribution:
            '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
        }
      );

      instance.addLayer(layer);

      setMap(instance);

      isRenderedRef.current = true;
    }
  }, [mapRef, map, mapOptions]);

  return map;
}

export default useMap;
