import React from 'react';
import { IonLoading } from '@ionic/react';
import { bool, func } from 'prop-types';



/**
 * TODO
 * 1. implement loader without an npm package.@ionic/react looks not like the best bet to implement loader in this app. It comes along a lot of packages. We only need ionloading component
 * 
 */

export default function Loader ({ setShowLoading, showLoading }) {
  return (
    <IonLoading
      isOpen={showLoading}
      onDidDismiss={() => setShowLoading(false)}
      message={'Please wait...'}
      duration={5000}
    />
  );
}

Loader.propTypes = {
  setShowLoading: func,
  showLoading: bool,
};