import React, { useState } from 'react';
import './App.css';
import ImageScanView from './components/views/ImageScanView';
import InfoView from './components/views/InfoView';
import LoadingView from './components/views/LoadingView';

const App = () => {
  const [ viewNumber, setViewNumber ] = useState(0);

  const advanceView = () => setViewNumber(viewNumber + 1);
  const retreatView = () => setViewNumber(viewNumber - 1);
  const views = [
    <LoadingView onAdvance={advanceView} />,
    <ImageScanView
      onAdvance={advanceView}
    />,
    <InfoView
      onClick={advanceView}
      onBack={retreatView}
    />
  ];
  return <div className="App">{views[ viewNumber ]}</div>;
}

export default App;
