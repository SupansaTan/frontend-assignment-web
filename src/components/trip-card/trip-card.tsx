import React, { useState, useEffect, useContext } from 'react';
import { Card, Row, Col, Image, Button } from 'react-bootstrap';
import ShowMoreText from "react-show-more-text";
import { TripModel } from '../../model/trip.model';
import { environment } from '../../environments/environment';
import { SearchTermsContext } from '../../context/search-terms';
import './trip-card.scss';

interface TagProps {
  tags: Array<string>
}

interface ImageGroupProps {
  photos: Array<string>
}

interface Props {
  fetchData: boolean;
  searchTerms: string;
}

function TripCardComponent({ fetchData, searchTerms }: Props) {
  const [ trips, setTrips ] = useState<Array<TripModel>>([])

  useEffect(() => {
    async function fetchTripsData() {
      try {
        if(searchTerms.length > 0) {
          const response = await fetch(`${environment.apiGateway.URL}/api/trips?keyword=` + searchTerms);
          const data = await response.json();
          setTrips(data.trips)
        }
        else {
          const response = await fetch(`${environment.apiGateway.URL}/api/trips`);
          const data = await response.json();
          setTrips(data.trips)
        }
      } 
      catch (error) {
        console.log(error);
      }
    }
    
    fetchTripsData()
  }, [fetchData])

  return(
    <React.Fragment>
      {
        trips.map((trip: TripModel) => {
          return(
            <Card key={trip.eid} className="border-0 my-4">
              <Row>
                <Col xs={12} lg="auto">
                  <Image src={trip.photos[0]} width={200} height={'100%'} className="trip-img rounded-15" alt={trip.title}/>
                </Col>

                <Col xs={12} className="col-lg">
                  <a href={trip.url} target="_blank" className="text-decoration-none text-black">
                    <h4 className="fw-bold">{ trip.title }</h4>
                  </a>

                  {/* description */}
                  <ShowMoreText lines={4} truncatedEndingComponent={" ... "} more={'อ่านต่อ'} className="text-muted">
                    {trip.description}
                    <a href={trip.url}>อ่านต่อ</a>
                  </ShowMoreText>

                  {/* tags */}
                  <div className="d-flex justify-content-start align-items-center">
                    <span className="me-2 mt-2">หมวด</span>
                    <TagGroup tags={trip.tags}/>
                  </div>

                  {/* photos */}
                  <div className="d-flex justify-content-start align-items-center mt-3">
                    <ImageGroup photos={trip.photos} />
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

const ImageGroup = ({photos}: ImageGroupProps) => {
  return(
    <React.Fragment>
      {
        photos.map((photo: string, index: number) => {
          if(index > 0) {
            return(
              <Image src={photo} width={100} height={100} key={index} className="trip-img me-4 rounded-15"/>
            )
          }
          return(<></>)
        })
      }
    </React.Fragment>
  )
}

export default TripCardComponent;