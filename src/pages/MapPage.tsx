// src/pages/ContactViewPage.tsx
import React from 'react';
import Map from '../components/Map';

const MapPage: React.FC = () => {

  return (
    <div className="p-4">
      <h2 className="text-lg font-semibold mb-4">Map</h2>
      <Map />
    </div>
  );
};

export default MapPage;
