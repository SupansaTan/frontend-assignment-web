import React, { useState, useEffect } from 'react';
import { Card, Row, Col, Image, Button } from 'react-bootstrap';
import ShowMoreText from "react-show-more-text";
import { TripModel } from '../../model/trip.model';
import { environment } from '../../environments/environment';
import './trip-card.scss';

function TripCardComponent() {
  const [trips, setTrips] = useState<Array<TripModel>>([])

  useEffect(() => {
    async function fetchTripsData() {
      try {
        const response = await fetch(`${environment.apiGateway.URL}/api/trips`);
        const data = await response.json();
        setTrips(data.trips)
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
                <Col xs="auto">
                  <Image src={trip.photos[0]} width={150} height={200} className="trip-img rounded-15" alt={trip.title}/>
                </Col>

                <Col>
                  <a href={trip.url} className="text-decoration-none text-black">
                    <h4 className="fw-bold">{ trip.title }</h4>
                  </a>

                  {/* description */}
                  <ShowMoreText lines={4} truncatedEndingComponent={" ... "} more={'อ่านต่อ'} className="text-muted">
                    {trip.description}
                    <a href={trip.url}>อ่านต่อ</a>
                  </ShowMoreText>

                  {/* tags */}
                  <div>
                    <span className="me-2 mt-2">หมวด</span>
                    <TagGroup tags={trip.tags}/>
                  </div>

                </Col>
              </Row>
            </Card>
          )
        })
      }
    </React.Fragment>
  )
}

interface TagProps {
  tags: Array<string>
}

const TagGroup = ({tags}: TagProps) => {
  return(
    <React.Fragment>
      {
        tags.map((tag: string, index: number) => {
          return(
            <Button key={tag} className={'rounded-3 text-black bg-lightgrey border-lightgrey rounded-25 shadow-none mt-2 tag-btn ' + ((index === 0)? 'me-1':'mx-1')}>
              { tag }
            </Button>
          )
        })
      }
    </React.Fragment>
  )
}

export default TripCardComponent;