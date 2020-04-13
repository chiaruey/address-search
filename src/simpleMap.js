import React from 'react';
import GoogleMapReact from 'google-map-react';
import PlaceIcon from '@material-ui/icons/Place';
import { Typography} from '@material-ui/core';
import { StoreContext } from './store';

const SimpleMap = () => {

  const FoundLocatioin = ({ text }) =>
    <div>
      <PlaceIcon color="secondary" />
      <Typography variant="caption" display="block" color="secondary">
        {text}
      </Typography>
    </div>;

  const addressContext = React.useContext(StoreContext);
  const { latitude, longtitude, address } = addressContext;


  if (typeof latitude == 'number' && typeof longtitude == 'number') {
    let center= {
        lat: latitude,
        lng: longtitude
      };
    let zoom= 11;

    return (
      <div style={{ height: '100vh', width: '100%' }}>
        <GoogleMapReact
          center={center}
          zoom={zoom}
        >
          <FoundLocatioin
            lat={latitude}
            lng={longtitude}
            text={address} 
          />
        </GoogleMapReact>
      </div>
    );
  } else {
    return <></>
  }
}

export default SimpleMap;
