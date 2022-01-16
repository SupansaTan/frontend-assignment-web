import React, {useContext} from 'react';
import { Placeholder, Card, Row, Col } from 'react-bootstrap';
import { WindowResizeContext } from '../../../context/window-resize';
import { SkeletonTripCardProps } from '../../../model/homepage/skeleton-trip-card.model';

function SkeletonTripCard(props: SkeletonTripCardProps) {
  const isMobile = useContext<Boolean>(WindowResizeContext)
  const photoGroupStyle = { width: (isMobile? '90px':'100px'), height: (isMobile? '90px':'100px') }

  return(
    <React.Fragment>
      <Card className="border-0 my-4 transition-all" key={props.cardKey}>
        <Row className="g-3">
          <Col xs={12} md="auto">
            {/* cover photo */}
            <Placeholder as="div" animation="glow" 
              style={{ width: (isMobile? '100%':'200px'), height: (isMobile? '200px':'100%')}}
            >
              <Placeholder xs={12} className='rounded-15 bg-grey h-100'/>
            </Placeholder>
          </Col>

          <Col xs={12} className="col-md">
            {/* title */}
            <Placeholder as="h3" animation="glow">
              <Placeholder xs={12} lg={10} className='rounded-3 bg-grey'/>
            </Placeholder>

            {/* description */}
            <Placeholder as="p" animation="glow" className="mb-1">
              <Placeholder xs={10} className='rounded-3 bg-grey'/>
              <Placeholder xs={8} className='rounded-3 bg-grey'/>
              <Placeholder xs={6} className='rounded-3 bg-grey'/>
            </Placeholder>

            {/* tags */}
            <Placeholder as={isMobile? "h2":"h3"} animation="glow">
              <Placeholder xs={3} md={2} lg={1} className='rounded-15 bg-grey me-2'/> 
              <Placeholder xs={3} md={2} lg={1} className='rounded-15 bg-grey me-2'/> 
              <Placeholder xs={3} md={2} lg={1} className='rounded-15 bg-grey'/>
            </Placeholder>

            {/* photos */}
            <div className={"d-flex mt-3 " + (isMobile? 'justify-content-center':'justify-content-start')}>
              <Placeholder as="div" animation="glow" className={isMobile? "me-2":"me-3"} style={ photoGroupStyle }>
                <Placeholder xs={12} className='rounded-15 bg-grey h-100'/>
              </Placeholder>
              <Placeholder as="div" animation="glow" className={isMobile? "me-2":"me-3"} style={ photoGroupStyle }>
                <Placeholder xs={12} className='rounded-15 bg-grey h-100'/>
              </Placeholder>
              <Placeholder as="div" animation="glow" style={ photoGroupStyle }>
                <Placeholder xs={12} className='rounded-15 bg-grey h-100'/>
              </Placeholder>
            </div>
          </Col>
        </Row>
      </Card>
    </React.Fragment>
  )
}

export default SkeletonTripCard;