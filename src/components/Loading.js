import React from 'react';
import loadingGif from '../styles/images/gif/loading-arrow.gif';
export const Loading = () => {
  return (
    <div className="loading">
      <h4>Rooms are loading</h4>
      <img src={loadingGif} alt="" />
    </div>
  );
};
