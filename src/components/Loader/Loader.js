import React from 'react';
import Loader from 'react-loader-spinner';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';

const styles = { textAlign: 'center' };

const SpinLoader = () => (
  <Loader
    style={styles}
    type="ThreeDots"
    color="#F1005C"
    height={100}
    width={100}
    timeout={3000}
  />
);

export default SpinLoader;
