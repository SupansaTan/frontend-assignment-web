import React from 'react';
import { Placeholder, Card, Row, Col } from 'react-bootstrap';

interface Props {
  cardKey: string; 
}

function SkeletonTripCard(props: Props) {
  return(
    <React.Fragment>
      <Card className="border-0 my-4 transition-all" key={props.cardKey}>
        <Row>
          <Col xs={12} lg="auto">
            <Placeholder as="div" animation="glow" style={{ width: '200px', height: '100%'}}>
              <Placeholder xs={12} className='rounded-15 bg-grey h-100'/>
            </Placeholder>
          </Col>

          <Col xs={12} className="col-lg">
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
            <Placeholder as="h3" animation="glow">
              <Placeholder xs={1} className='rounded-15 bg-grey me-2'/> 
              <Placeholder xs={1} className='rounded-15 bg-grey me-2'/> 
              <Placeholder xs={1} className='rounded-15 bg-grey'/>
            </Placeholder>

            {/* photos */}
            <div className="d-flex justify-content-start mt-3">
              <Placeholder as="div" animation="glow" className="me-3" style={{ width: '100px', height: '100px'}}>
                <Placeholder xs={12} className='rounded-15 bg-grey h-100'/>
              </Placeholder>
              <Placeholder as="div" animation="glow" className="me-3" style={{ width: '100px', height: '100px'}}>
                <Placeholder xs={12} className='rounded-15 bg-grey h-100'/>
              </Placeholder>
              <Placeholder as="div" animation="glow" style={{ width: '100px', height: '100px'}}>
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