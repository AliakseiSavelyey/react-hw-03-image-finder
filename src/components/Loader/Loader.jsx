import React, { Component } from 'react';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import Loader from 'react-loader-spinner';
import './Loader.scss';

class ImageLoader extends Component {
  render() {
    return (
      <div className="loader">
        <Loader type="ThreeDots" color="#3f511b5" height={80} width={80} />
      </div>
    );
  }
}

export default ImageLoader;
