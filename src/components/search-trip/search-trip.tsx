import React, { useContext, useState, useEffect, Dispatch, SetStateAction, ChangeEvent } from 'react';
import { useNavigate } from "react-router-dom"
import { Form, Row, Col, Button, Spinner } from 'react-bootstrap';
import { SearchTermsContext } from '../../context/search-terms';
import './search-trip.scss';

interface Props {
  onSearch: any;
  searchText: string;
  setSearchText: any;
}

function SearchTripComponent(props: Props) {
  const [ isLoading, setIsLoading ] = useState(false)

  const copyToClipboard = () => {
    setTimeout(
      () => {
        setIsLoading(false)
      }, 1000)

    setIsLoading(true)
    navigator.clipboard.writeText(window.location.href)
  }

  const onSearchTermsChange = (value: string) => {
    props.setSearchText(value)
  }

  const clearSearchTerms = () => {
    props.searchText = props.setSearchText('');
  }

  return(
    <React.Fragment>
      <Row>
        {/* search input form */}
        <Col xs={12}>
          <Row className="col-12 col-lg-6 mx-auto">
            <Col className="position-relative search-wrapper">
              <Form.Control
                type="search"
                value={props.searchText}
                onChange={(e) => {onSearchTermsChange(e.target.value)}}
                placeholder="อยากไปเที่ยวไหน ลองค้นหาดูเลย"
                id="search_terms"
                className="my-4 border-0 border-bottom rounded-0 shadow-none"
                aria-label="SearchTrip"
              />
              <a onClick={(e) => {e.preventDefault(); clearSearchTerms()}}>
                <i className={"bi bi-x-lg position-absolute " + (props.searchText.length>0? '':'d-none')}></i>
              </a>
            </Col>

            <Col xs="auto">
              <Button onClick={() => {props.onSearch(props.searchText)}} className="border-0 shadow-none text-white bg-blue my-4 search-btn">
                <i className="bi bi-search"></i>
              </Button>
            </Col>
          </Row>
        </Col>

        {/* share button */}
        <Col xs={12} className="d-flex justify-content-end">
          <Button className="border-0 shadow-none text-black bg-lightgrey share-btn rounded-circle"
            onClick={() => copyToClipboard()}>
            <i className={"bi bi-link-45deg text-black " + (isLoading? 'd-none':'')}></i>
            <Spinner animation="border" variant="secondary" size="sm" className={isLoading? '':'d-none'} />
          </Button>
        </Col>
      </Row>
    </React.Fragment>
  )
}

export default SearchTripComponent;