import React, { useEffect, useRef } from 'react';
import 'ol/ol.css';
import Map from 'ol/Map';
import View from 'ol/View';
import TileLayer from 'ol/layer/Tile';
import VectorLayer from 'ol/layer/Vector';
import VectorSource from 'ol/source/Vector';
import OSM from 'ol/source/OSM';
import Feature from 'ol/Feature';
import Point from 'ol/geom/Point';
import { fromLonLat } from 'ol/proj';
import { Icon, Style } from 'ol/style';
import location from "../assets/location.png";
import Zoom from 'ol/control/Zoom';
import ZoomSlider from 'ol/control/ZoomSlider';

const BasicMap: React.FC = () => {
  const mapRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    // Initialize the map
    const map = new Map({
      target: mapRef.current!, // Set the target element to the ref
      layers: [
        new TileLayer({
          source: new OSM(), // Use OpenStreetMap as the base layer
        }),
      ],
      view: new View({
        center: fromLonLat([34.7730556, 32.0666667]), // Tel Aviv center coordinates in lon/lat
        zoom: 10, // Set the initial zoom level
      }),
      controls: [
        new Zoom(),
        new ZoomSlider(),
      ],
    });

    // Create a vector layer for markers
    const vectorLayer = new VectorLayer({
      source: new VectorSource(),
    });

    // Add the vector layer to the map
    map.addLayer(vectorLayer);

    // Add a marker for Tel Aviv
    const telAvivMarker = new Feature({
      geometry: new Point(fromLonLat([34.7730556, 32.0666667])),
    });

    // Set a custom icon for the marker with a smaller size
    telAvivMarker.setStyle(
      new Style({
        image: new Icon({
          anchor: [0.5, 46],
          anchorXUnits: 'fraction',
          anchorYUnits: 'pixels',
          src: location,
          scale: 0.02, // Adjust the scale to resize the icon
        }),
      })
    );

    // Add the marker to the vector layer
    vectorLayer.getSource()!.addFeature(telAvivMarker);

    // Array of points of interest in Tel Aviv
    const pointsOfInterest = [
      { lon: 34.778519, lat: 32.075022, name: 'Dizengoff Center' },
      { lon: 34.781769, lat: 32.087133, name: 'Tel Aviv Museum of Art' },
      { lon: 34.775924, lat: 32.072175, name: 'Carmel Market' },
    ];

    // Add markers for points of interest
    pointsOfInterest.forEach(point => {
      const feature = new Feature({
        geometry: new Point(fromLonLat([point.lon, point.lat])),
        name: point.name,
      });

      feature.setStyle(
        new Style({
          image: new Icon({
            anchor: [0.5, 46],
            anchorXUnits: 'fraction',
            anchorYUnits: 'pixels',
            src: location,
            scale: 0.02, 
          }),
        })
      );

      vectorLayer.getSource()!.addFeature(feature);
    });

    // Zoom to fit button
    const zoomToFitButton = document.createElement('button');
    zoomToFitButton.innerHTML = 'Zoom to Fit';
    zoomToFitButton.addEventListener('click', () => {
      const extent = vectorLayer.getSource()!.getExtent();
      map.getView().fit(extent, { padding: [10, 10, 10, 10], duration: 1000 });
    });

    // Add the zoom to fit button to the map
    mapRef.current!.appendChild(zoomToFitButton);

    return () => {
      // Cleanup when the component is unmounted
      map.setTarget();
    };
  }, []);

  return <div ref={mapRef} style={{ width: '100%', height: '100vh', position: 'relative' }}></div>;
};

export default BasicMap;
