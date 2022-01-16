import React, { useState, useEffect, useContext } from 'react';
import { Card, Row, Col, Image, Button } from 'react-bootstrap';
import TextTruncate from 'react-text-truncate';
import { TripModel } from '../../../model/trip.model';
import { TagProps, ImageGroupProps } from '../../../model/homepage/trip-card.model';
import SkeletonTripCard from '../skeleton-trip-card/skeleton-trip-card';
import { WindowResizeContext } from '../../../context/window-resize';
import { SearchTextContext } from '../../../context/search-text';
import ModalImageComponent from '../../../components/modal-image/modal-image';
import { environment } from '../../../environments/environment';
import './trip-card.scss';

function TripCardComponent() {
  const [trips, setTrips] = useState<Array<TripModel>>([])
  const [isLoading, setIsLoading] = useState<boolean>(true)
  const [fetchFailed, setFetchFailed] = useState<boolean>(false)
  const isMobile = useContext<Boolean>(WindowResizeContext)
  const { searchText, changeSearchText } = useContext(SearchTextContext)

  useEffect(() => {
    window.scrollTo({top: 0, behavior: 'auto'});
    fetchTripsData()
  }, [searchText])

  const getSkeletonGroup = () => {
    let cards = [];
    for(let i=0; i<5; i++){
      cards.push(<SkeletonTripCard cardKey={'trip-' + i }/>);
    }
    return cards;
  }

  async function fetchTripsData() {
    try {
      setIsLoading(true)

      if(searchText.length > 0) {
        const response = await fetch(`${environment.apiGateway.URL}/api/trips?keyword=${searchText}`);
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
      setFetchFailed(true)
    }
    finally {
      setTimeout(() => {
        setIsLoading(false)
      }, 1000)
    }
  }

  return(
    <React.Fragment>
      {
        (fetchFailed)
        ? (
            <p className="text-center">Sorry, Can not fetch trips data now.</p>
          )
        : isLoading
        ? (
            getSkeletonGroup()
          )
        : (!isLoading && trips.length > 0)
        ? (
            trips.map((trip: TripModel) => {
              return(
                <Card key={trip.title} className="border-0 my-4">
                  <Row className='g-3'>
                    <Col xs={12} md="auto" className={isMobile? 'd-flex justify-content-center':''}>
                      <Image 
                        src={trip.photos[0]} 
                        width={isMobile? '100%':200} 
                        height={isMobile? 200:'100%'} 
                        className="trip-img rounded-15"
                        alt={trip.title}/>
                    </Col>

                    <Col xs={12} className="col-md">
                      <a href={trip.url} target="_blank" rel="noopener noreferrer" className="text-decoration-none text-black">
                        <h4 className="fw-bold">{ trip.title }</h4>
                      </a>

                      {/* description */}
                      <TextTruncate
                        line={2}
                        element="div"
                        truncateText=" .... "
                        text={trip.description}
                        containerClassName="text-secondary trip-description"
                        textTruncateChild={<a href={trip.url} target="_blank" rel="noopener noreferrer">อ่านต่อ</a>}
                      />

                      {/* tags */}
                      <div className="d-flex flex-wrap justify-content-start align-items-center">
                        <span className="me-2 mt-2">หมวด</span>
                        <TagGroup tags={trip.tags} handleOnClick={(tagTitle: string) => changeSearchText(tagTitle)}/>
                      </div>

                      {/* photos */}
                      <div className={"d-flex align-items-center mt-3 " + (isMobile? 'justify-content-center':'justify-content-start')}>
                        <ImageGroup photos={trip.photos} />
                      </div>
                    </Col>
                  </Row>
                </Card>
              )
            })
          )
        : (
            <p className="text-center">'{ searchText }' Not Found.</p>
          )
      }
    </React.Fragment>
  )
}

const TagGroup = (tagProps: TagProps) => {
  return(
    <React.Fragment>
      {
        tagProps.tags.map((tag: string, index: number) => {
          return(
            <Button 
              key={tag} 
              onClick={() => {tagProps.handleOnClick(tag)}}
              className={'rounded-3 text-black bg-lightgrey border-lightgrey rounded-25 shadow-none mt-2 tag-btn ' + ((index === 0)? 'me-1':'mx-1')}>
              { tag }
            </Button>
          )
        })
      }
    </React.Fragment>
  )
}

const ImageGroup = ({photos}: ImageGroupProps) => {
  const isMobile = useContext<Boolean>(WindowResizeContext)

  return(
    <React.Fragment>
      {
        photos.map((photo: string, index: number) => {
          if(index > 0) {
            return(
              <Image src={photo} width={isMobile? 90:100} height={isMobile? 90:100} key={photo} 
                className={"trip-img rounded-15 " + (isMobile? 'me-2':'me-4')}
              />
            )
          }
          return(<></>)
        })
      }
    </React.Fragment>
  )
}

export default TripCardComponent;