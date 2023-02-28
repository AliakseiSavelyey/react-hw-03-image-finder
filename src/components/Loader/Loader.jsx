import React from 'react';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import Loader from 'react-loader-spinner';
import './Loader.scss';

export default function ImageLoader() {
  return (
    <div className={'loader'}>
      <Loader type="ThreeDots" color="#3f511b5" height={80} width={80} />
    </div>
  );
}
