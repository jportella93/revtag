import React, {useState} from 'react';
import {
  Descriptions,
  Card,
  Icon,
  List,
  Avatar,
  Timeline,
  Typography,
  Button
} from 'antd';
import './App.css';
import cargoShip from './images/cargo-ship.svg';
import truck from './images/truck.svg';
import hand from './images/hand.svg';
import logo from './images/logo.svg';
import camera from './images/photo-camera.svg';
const {Title} = Typography;

const rythm = 10;

const fullDivStyle = {
  width: '100vw',
  height: '80vh',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center'
};

const LoadingView = ({onClick}) => {
  return (
    <div style={fullDivStyle} onClick={onClick}>
      <img src={logo} className="logo-animation" alt="Revtag logo" />
    </div>
  );
};

const ImageScanView = ({onClick}) => {
  return (
    <label
      onClick={onClick}
      style={{...fullDivStyle, flexDirection: 'column'}}
      class="cameraButton">
      <img src={camera} alt="Tap to scan" style={{width: '50vmin'}} />
      <Title>Tap to scan</Title>

      <input type="file" id="cameraInput" accept="image/*" capture />
    </label>
  );
};

const Credit = () => {
  const data = [
    {
      name: 'Shmashicons',
      title: 'Shmashicons',
      link: 'https://www.flaticon.com/authors/shmashicons'
    },
    {
      name: 'monkik',
      title: 'monkik',
      link: 'https://www.flaticon.com/authors/monkik'
    },
    {
      name: 'mavadee',
      title: 'mavadee',
      link: 'https://www.flaticon.com/authors/mavadee'
    },
    {
      name: 'Freepik',
      title: 'Freepik',
      link: 'https://www.freepik.com'
    }
  ];
  return (
    <div style={{textAlign: 'center'}}>
      Icons made by{' '}
      {data.map(d => (
        <a href={d.link} title={d.title}>
          {d.name}
          {', '}
        </a>
      ))}{' '}
      from{' '}
      <a href="https://www.flaticon.com/" title="Flaticon">
        www.flaticon.com
      </a>{' '}
      is licensed by{' '}
      <a
        href="http://creativecommons.org/licenses/by/3.0/"
        title="Creative Commons BY 3.0"
        target="_blank">
        CC 3.0 BY
      </a>
    </div>
  );
};

const InfoView = ({onBack}) => {
  const cardStyle = {marginBottom: `${rythm * 2}px`};

  const elementStyle = {marginBottom: `${rythm}px`};

  const rawMaterials = [
    <span>
      <b>78% Cotton</b>
      <br />
      🇮🇳 India <br />
      🇧🇩 Bangladesh
    </span>,
    <span>
      <b>22% Polyester</b>
      <br />
      🇨🇳 China <br />
    </span>
  ];

  const manufacturingMaterials = [
    <span>Colorant</span>,
    <span>Fabric relaxant</span>,
    <span>Factory soap</span>
  ];

  return (
    <div style={{padding: '10px'}}>
      <Button
        type="normal"
        style={{...elementStyle, border: 'none'}}
        onClick={onBack}>
        <Icon type="left" />
        Go back
      </Button>
      <Card style={cardStyle}>
        <Descriptions title="Factory" column="2">
          <Descriptions.Item label="Owned by">Pepita Flores</Descriptions.Item>
          <Descriptions.Item label="Workers">380 / 503</Descriptions.Item>
        </Descriptions>
        <Icon type="environment" /> Arteixio (Galicia)
      </Card>
      <Card style={cardStyle}>
        <Descriptions title="Workers" />
        <div style={{display: 'flex', justifyContent: 'center'}}>
          <Avatar src={hand} size="large" shape="square" />
          <p style={{marginLeft: '10px'}}>
            Average wage <br /> 1253€
          </p>
        </div>
      </Card>
      <Card style={cardStyle}>
        <Descriptions title="Manufacturing">
          <Descriptions.Item label="Total time">37 minutes</Descriptions.Item>
          <Descriptions.Item label="Processes">
            Laying, marking, cutting, stitching
          </Descriptions.Item>
        </Descriptions>

        <Card title="Raw materials" style={elementStyle}>
          {/* <Card title="Raw materials" bordered={false}> */}
          <List
            dataSource={rawMaterials}
            renderItem={item => <List.Item>{item}</List.Item>}
          />
        </Card>

        <Card title="Manufacturing materials">
          {/* <Card title="Manufacturing materials" bordered={false}> */}
          <List
            dataSource={manufacturingMaterials}
            renderItem={item => <List.Item>{item}</List.Item>}
          />
        </Card>
      </Card>
      <Card style={cardStyle}>
        <Descriptions title="Transport">
          <Descriptions.Item label="Total">
            357 km / 2 days and 3 hours
          </Descriptions.Item>
        </Descriptions>
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-evenly',
            ...elementStyle
          }}>
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              textAlign: 'center'
            }}>
            <Avatar src={truck} size="large" shape="square" />
            <p>
              225 km <br /> 1 day and 2 hours
            </p>
          </div>
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              textAlign: 'center'
            }}>
            <Avatar src={cargoShip} size="large" shape="square" />
            <p>
              225 km <br /> 1 day and 1 hours
            </p>
          </div>
        </div>
        <Timeline mode="alternate">
          <Timeline.Item>
            <p>Leave factory in Arteixio (Galicia)</p>
          </Timeline.Item>
          <Timeline.Item>
            <p>Port of A coruña (Galicia)</p>
          </Timeline.Item>
          <Timeline.Item>Port of Barcelona (Cataluña)</Timeline.Item>
          <Timeline.Item>
            Arrive to store in Passeig de Grácia, 5, Barcelona (Cataluña)
          </Timeline.Item>
        </Timeline>
      </Card>
      <Credit />
    </div>
  );
};

let hasStarted = false;
function App() {
  const [viewNumber, setViewNumber] = useState(0);
  if (!hasStarted) {
    setTimeout(() => setViewNumber(1), 3000);
    hasStarted = true;
  }

  const retard = (fn, ms) => {
    setTimeout(() => fn(), ms);
  };
  const views = [
    <LoadingView onClick={() => setViewNumber(viewNumber + 1)} />,
    <ImageScanView
      onClick={() => retard(() => setViewNumber(viewNumber + 1), 1000)}
    />,
    <InfoView
      onClick={() => setViewNumber(viewNumber + 1)}
      onBack={() => setViewNumber(viewNumber - 1)}
    />
  ];
  return <div className="App">{views[viewNumber]}</div>;
}

export default App;
