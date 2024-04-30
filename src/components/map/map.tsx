import { useEffect, useRef } from 'react';
import { Icon, Marker, layerGroup } from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { Location } from '../../types/location';
import {
  MAP_DEFAULT_ZOOM,
  URL_MARKER_ACTIVE,
  URL_MARKER_DEFAULT,
} from '../../constants/map';
import useMap from '../../hooks/use-map';
import cn from 'classnames';

type MapProps = {
  city: Omit<Location, 'zoom'>;
  points: Location[];
  activePoint?: Location;
  parentClass: string;
};

const defaultCustomIcon = new Icon({
  iconUrl: URL_MARKER_DEFAULT,
  iconSize: [28, 40],
  iconAnchor: [14, 40],
});

const activeCustomIcon = new Icon({
  iconUrl: URL_MARKER_ACTIVE,
  iconSize: [28, 40],
  iconAnchor: [14, 40],
});

function Map({
  city,
  points,
  activePoint,
  parentClass,
}: MapProps): JSX.Element {
  const mapRef = useRef<HTMLElement | null>(null);
  const map = useMap(mapRef, {
    center: {
      lat: city.latitude,
      lng: city.longitude,
    },
    zoom: MAP_DEFAULT_ZOOM,
  });

  useEffect(() => {
    if (map) {
      const markerLayer = layerGroup().addTo(map);

      points.forEach((point) => {
        const marker = new Marker({
          lat: point.latitude,
          lng: point.longitude,
        });

        const icon =
          point === activePoint ? activeCustomIcon : defaultCustomIcon;

        marker.setIcon(icon).addTo(markerLayer);
      });

      const { latitude: lat, longitude: lng } = city;
      map.setView({ lat, lng }, MAP_DEFAULT_ZOOM);
    }
  }, [map, city, points, activePoint]);

  return <section ref={mapRef} className={cn(parentClass, 'map')}></section>;
}

export default Map;
