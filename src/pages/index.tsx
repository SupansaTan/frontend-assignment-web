import React from 'react';
import { Row, Col } from 'react-bootstrap';
import Typewriter from 'typewriter-effect';
import { SearchTermsProvider } from '../context/search-terms';
import SearchTripComponent from '../components/search-trip/search-trip';
import TripCardComponent from '../components/trip-card/trip-card';
import './index.scss';

function HomePage() {
  return(
    <React.Fragment>
      <Row>
        <Typewriter
          options={{
            strings: 'เที่ยวไหนดี',
            autoStart: true,
            delay: 75,
          }}
        />

        <SearchTermsProvider>
          <SearchTripComponent/>
          <TripCardComponent/>
        </SearchTermsProvider>
      </Row>
    </React.Fragment>
  )
}

export default HomePage;