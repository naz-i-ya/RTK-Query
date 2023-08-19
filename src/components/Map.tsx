import React from 'react';
import { useGetCountryDataQuery } from '../api/covidApi';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';

const Map: React.FC = () => {
  const { data: countryData } = useGetCountryDataQuery(); // Use the hook without passing any arguments

  console.log(countryData, "countryData");

  return (
    <MapContainer center={[0, 0]} zoom={2} style={{ height: '500px' }}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      {countryData?.map((country: any) => (
        <Marker
          key={country.country}
          position={[country.countryInfo.lat, country.countryInfo.long]}
        >
          <Popup>
            <div>
              <h2>{country.country}</h2>
              <p>Total Active Cases: {country.active}</p>
              <p>Total Recovered Cases: {country.recovered}</p>
              <p>Total Deaths: {country.deaths}</p>
            </div>
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
};

export default Map;
