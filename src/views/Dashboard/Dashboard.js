import React from 'react';
import {
  Card,
  CardBody,
  Col,
  Row,
} from 'reactstrap';
import styles from './Dashboard.module.scss';
import area from 'constants/area';
import NewsCarousel from './NewsCarousel';
import SearchInput from './SearchInput';


function Dashboard({ history }) {
  return (
    <div className={styles.root}>
      <div className="animated fadeIn card-body">
        <Row>
          <Col>
            <SearchInput />
          </Col>
        </Row>
      </div>
      <NewsCarousel />
      <div className="animated fadeIn">
        <CardBody>
          <Row>
            {area.map(loc => (
              <Col sm={4} lg={3} xs={6} className="px-2 my-1" key={loc.id}>
                <Card
                  className={`m-0 bg-primary text-dark text-center pointer ${styles.button}`}
                  onClick={() => { history.push(`/area/${loc.id}`)}}
                  style={{ 'background-image': `url(${loc.img})`, position: 'relative' }}
                >
                  <CardBody>
                    <div className={styles.overlay} />
                    <img src={loc.map} width="100px" alt={loc.label}/>
                    <h5>{loc.label}</h5>
                  </CardBody>
                </Card>
              </Col>
            ))}
          </Row>
        </CardBody>
      </div>
    </div>
  );
}

export default Dashboard;