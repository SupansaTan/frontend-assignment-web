import React, { useState, useEffect } from 'react';
import { Card, Row, Col, Image } from 'react-bootstrap';
import { TripModel } from '../../model/trip.model';
import { environment } from '../../environments/environment';

function TripCardComponent() {
  const [trips, setTrips] = useState<Array<TripModel>>([])

  useEffect(() => {
    async function fetchTripsData() {
      try {
        const response = await fetch(`${environment.apiGateway.URL}/api/trips`);
        const data = await response.json();
        setTrips(data)
      } 
      catch (error) {
        console.log(error);
      }
    }
    
    fetchTripsData()
  }, [])

  return(
    <React.Fragment>
      {
        trips.map((trip: TripModel) => {
          return(
            <Card key={trip.eid} className="border-0 my-4">
              <Row>
                <Col>
                  <Image src={trip.photos[0]} width={150} height={200} className="rounded-3" alt={trip.title}/>
                </Col>
                <Col>
                  <h4>{ trip.title }</h4>
                  <p>
                    { trip.description } 
                    <a href={trip.url}>อ่านต่อ</a>
                  </p>
                </Col>
              </Row>
            </Card>
          )
        })
      }
    </React.Fragment>
  )
}

export default TripCardComponent;