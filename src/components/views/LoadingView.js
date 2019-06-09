import React from 'react';
import logo from '../../images/logo.svg';
import fullDivStyle from '../../styles/fullDivStyle'

const LoadingView = ({ onAdvance }) => {
  let hasStarted = false;
  if (!hasStarted) {
    setTimeout(() => onAdvance(), 3000);
    hasStarted = true;
  }
  return (
    <div style={fullDivStyle} onClick={onAdvance}>
      <img src={logo} className="logo-animation" alt="Revtag logo" />
    </div>
  );
};

export default LoadingView;
