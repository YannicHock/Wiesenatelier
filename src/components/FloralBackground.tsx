import React from 'react';

export const FloralBackground: React.FC = () => {
  const baseUrl = import.meta.env.BASE_URL;

  return (
    <div className="floral-background" aria-hidden="true">
      <img src={`${baseUrl}svg/hanging.svg`} className="floral-svg hanging-1" alt="" />
      <img src={`${baseUrl}svg/hanging%202.svg`} className="floral-svg hanging-2" alt="" />
      <img src={`${baseUrl}svg/Farn%201.svg`} className="floral-svg farn-1" alt="" />
      <img src={`${baseUrl}svg/Farn%202.svg`} className="floral-svg farn-2" alt="" />
      <img src={`${baseUrl}svg/Fineline.svg`} className="floral-svg fineline-1" alt="" />
    </div>
  );
};
