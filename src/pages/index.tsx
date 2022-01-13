import React from 'react';
import { Row, Col } from 'react-bootstrap';
import SearchTripComponent from '../components/search-trip/search-trip';
import TripCardComponent from '../components/trip-card/trip-card';
import './index.scss';

function HomePage() {
  return(
    <React.Fragment>
      <Row>
        <h1 className="text-center heading text-blue">เที่ยวไหนดี</h1>

        <SearchTripComponent/>
        <TripCardComponent/>
      </Row>
    </React.Fragment>
  )
}

export default HomePage;