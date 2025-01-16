import React from 'react';
import PropTypes from 'prop-types';

const Loader = ({ style = {}, innerStyle, textInfo }) => (
  <div style={ { position: 'fixed', width: '100%', height: '100%',
    left: '0', top: '0', right: '0', bottom: '0', zIndex: '2',
    backgroundColor: 'rgba(0,0,0,0.5)' }}>
    <svg xmlns="http://www.w3.org/2000/svg" style={ {
      margin: 'auto', display: 'block', position: 'absolute',
      left: '0', top: '0', right: '0', bottom: '0' } }
    width="200px" height="200px" viewBox="0 0 100 100"
    preserveAspectRatio="xMidYMid">
      <path d="M10 50A40 40 0 0 0 90 50A40 42 0 0 1 10 50"
        fill="#ffffff" stroke="none" transform="rotate(269.768 50 51)">
        <animateTransform attributeName="transform" type="rotate"
          dur="1s" repeatCount="indefinite" keyTimes="0;1"
          values="0 50 51;360 50 51"></animateTransform>
      </path></svg>
    <div style={ { position: 'absolute', top: '400px',
      width: '100%', textAlign: 'center' } }>
      <h5>{ textInfo }</h5>
    </div>
  </div>);

Loader.propTypes = {
  innerStyle: PropTypes.object,
  size: PropTypes.string,
  textInfo: PropTypes.string,
};


export { Loader };