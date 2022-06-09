import React from 'react';

{
  /* the Vehicle component has a prop called vehicle. Check to see what string is in this vehicle prop */
}
export default function Vehicle({ vehicle }) {
  return (
    <div className="vehicle">
      {vehicle === 'car' && '🚗'}
      {vehicle === 'truck' && '🚚'}
      {vehicle === 'bus' && '🚌'}
      {vehicle === 'motorcycle' && '🏍️'}
    </div>
  );
}
