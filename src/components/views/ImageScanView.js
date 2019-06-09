import { Typography } from 'antd';
import React, { useState } from 'react';
import camera from '../../images/photo-camera.svg';
import fullDivStyle from '../../styles/fullDivStyle';
import retard from '../../utils/retard';
const { Title } = Typography;

const ImageScanView = ({ onAdvance }) => {

  const [ showWarning, setShowWarning ] = useState(false);

  const warningStyle = { position: 'absolute', top: '80%', padding: '10px', textAlign: 'center' }

  const handleClick = () => retard(() => setShowWarning(true), 3000)
  return (
    <label
      style={{ ...fullDivStyle, flexDirection: 'column' }}
      className="cameraButton">
      <img src={camera} alt="Tap to scan" style={{ width: '50vmin' }} />
      <Title>Tap to scan</Title>

      <input style={{ display: 'none' }} type="file" id="cameraInput" accept="image/*" capture="environment" onChange={onAdvance} onClick={handleClick} />

      {showWarning && <Title level={4} style={warningStyle}>Can't take pictures? Make sure your browser has camera access permission</Title>}
    </label>
  );
};

export default ImageScanView;
