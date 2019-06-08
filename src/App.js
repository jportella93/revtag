import React from 'react';
import {Descriptions, Card, Icon, List, Avatar, Timeline} from 'antd';
import './App.css';
import cargoShip from './images/cargo-ship.svg';
import truck from './images/truck.svg';
import hand from './images/hand.svg';

const rythm = 10;

const Credit = () => {
  const data = [
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
    <div>
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

const InfoView = () => {
  const lightStyle = {
    fontWeight: 400
  };
  const boldStyle = {
    fontWeight: 500
  };
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
    <>
      <Card style={cardStyle}>
        <Descriptions title="Factory" column="2">
          <Descriptions.Item label="Owned by">Inditex</Descriptions.Item>
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
              225 km <br /> 1 day and 2 hours
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
    </>
  );
};

function App() {
  return (
    <div className="App">
      <InfoView />
      <Credit />
    </div>
  );
}

export default App;
