import React, { useContext, useState } from 'react';
import { Form, Row, Col, Button, Spinner } from 'react-bootstrap';
import { SearchTermsContext } from '../../context/search-terms';
import './search-trip.scss';

function SearchTripComponent() {
  const [ isLoading, setIsLoading ] = useState(false)
  const { searchTerms, setSearchTerms } = useContext(SearchTermsContext)

  const copyToClipboard = () => {
    setTimeout(
      () => {
        setIsLoading(false)
      }, 1000)

    setIsLoading(true)
    navigator.clipboard.writeText(window.location.href)
  }

  const onSearchTermsChange = (value: string) => {
    setSearchTerms({searchTerms: value, setSearchTerms: (): void => {}})
  }

  const clearSearchTerms = () => {
    setSearchTerms({searchTerms: '', setSearchTerms: (): void => {}})
  }

  return(
    <React.Fragment>
      <Row>
        {/* search input form */}
        <Col className="position-relative search-wrapper">
          <Form.Control
            type="search"
            value={searchTerms}
            onChange={(e) => {onSearchTermsChange(e.target.value)}}
            placeholder="อยากไปเที่ยวไหน ลองค้นหาดูเลย"
            id="search_terms"
            className="my-4 border-0 border-bottom rounded-0 shadow-none"
            aria-label="SearchTrip"
          />
          <a href="javascript:void(0)" onClick={(e) => {e.preventDefault(); clearSearchTerms()}}>
            <i className={"bi bi-x-lg position-absolute " + (searchTerms.length>0? '':'d-none')}></i>
          </a>
          <i className="bi bi-search position-absolute"></i>
        </Col>

        {/* share button */}
        <Col xs="auto" className="d-flex align-self-center">
          <Button className="border-0 shadow-none text-black bg-lightgrey share-btn"
            onClick={() => copyToClipboard()}>
            Copy Link
            <i className={"bi bi-clipboard text-black ms-2 " + (isLoading? 'd-none':'')}></i>
            <Spinner animation="border" variant="secondary" size="sm" className={isLoading? 'ms-2':'d-none'} />
          </Button>
        </Col>
      </Row>
    </React.Fragment>
  )
}

export default SearchTripComponent;