import React, { useState, useEffect, useContext } from 'react';
import { Form, Row, Col, Button } from 'react-bootstrap';
import ToastComponent from '../../../components/toast/toast';
import { SearchTextContext } from '../../../context/search-text';
import './search-trip.scss';

function SearchTripComponent() {
  const [ showToast, setShowToast ] = useState(false)
  const [ inputText, setInputText] = useState('');
  const { searchText, changeSearchText } = useContext(SearchTextContext);

  useEffect(() => {
    setInputText(searchText)
  }, [searchText])

  const copyToClipboard = () => {
    navigator.clipboard.writeText(window.location.href)
    setShowToast(true)

    setTimeout(() => {
      setShowToast(false)
    }, 3000)
  }

  const clearSearchTerms = () => {
    setInputText('');
    changeSearchText('');
  }

  const handleKeyPress = (target: React.KeyboardEvent) => {
    if(target.key === 'Enter'){
      onSubmitSearch()
    }
  }

  const onSubmitSearch = () => {
    changeSearchText(inputText);
  }

  return(
    <React.Fragment>
      <Row className="gx-2">
        {/* search input form */}
        <Col xs={12}>
          <Row className="col-12 col-lg-6 mx-auto gx-2">
            <Col className="position-relative search-wrapper ps-2">
              <Form.Control
                type="search"
                value={inputText}
                onChange={(e) => {setInputText(e.target.value);}}
                onKeyPress={handleKeyPress}
                placeholder="หาที่เที่ยวแล้วไปกัน..."
                id="search_terms"
                className="my-4 border-0 border-bottom rounded-0 shadow-none text-center search-trip"
                aria-label="SearchTrip"
              />
              <a href="/trip-finder" onClick={(e) => {e.preventDefault(); clearSearchTerms();}}>
                <i className={"bi bi-x-lg position-absolute text-secondary " + (inputText.length>0? '':'d-none')}></i>
              </a>
            </Col>

            <Col xs="auto">
              <Button onClick={onSubmitSearch} className="border-0 shadow-none text-white bg-blue my-4 search-btn">
                <i className="bi bi-search"></i>
              </Button>
            </Col>
          </Row>
        </Col>

        {/* share button */}
        <Col xs={12} className="d-flex justify-content-end">
          <Button className="border-0 shadow-none text-black bg-lightgrey share-btn rounded-3"
            onClick={() => copyToClipboard()}>
            <i className="bi bi-link-45deg text-black me-2"></i>
            Share Link
          </Button>
        </Col>
      </Row>

      {/* toast */}
      <ToastComponent status={true} message='Link copied!' stylesClass={showToast? '':'d-none'} />
    </React.Fragment>
  )
}

export default SearchTripComponent;