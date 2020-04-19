import React from 'react';
import { IonLoading } from '@ionic/react';
import { bool, func } from 'prop-types';

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