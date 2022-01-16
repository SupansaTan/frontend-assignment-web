import React, { useState, useEffect, useContext } from 'react';
import { Form, Row, Col, Button, Spinner } from 'react-bootstrap';
import ToastComponent from '../../../components/toast/toast';
import { SearchTextContext } from '../../../context/search-text';
import './search-trip.scss';

interface Props {
  searchText: string;
  onSearch: any;
}

function SearchTripComponent() {
  const [ isLoading, setIsLoading ] = useState(false)
  const [ showToast, setShowToast ] = useState(false)
  const [ inputText, setInputText] = useState('');
  const { searchText, changeSearchText } = useContext(SearchTextContext);

  useEffect(() => {
    setInputText(searchText)
  }, [searchText])

  const copyToClipboard = () => {
    setShowToast(true)

    setTimeout(() => {
      setShowToast(false)
    }, 3000)
    navigator.clipboard.writeText(window.location.href)
  }

  const onSearchTermsChange = (value: string) => {
    setInputText(value)
  }

  const clearSearchTerms = () => {
    setInputText('');
    changeSearchText('');
  }

  const handleKeyPress = (target: React.KeyboardEvent) => {
    if(target.key == 'Enter'){
      onSubmitSearch()
    } 
  }

  const onSubmitSearch = () => {
    changeSearchText(inputText);
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
                value={inputText}
                onChange={(e) => {onSearchTermsChange(e.target.value);}}
                onKeyPress={handleKeyPress}
                placeholder="หาที่เที่ยวแล้วไปกัน..."
                id="search_terms"
                className="my-4 border-0 border-bottom rounded-0 shadow-none text-center search-trip"
                aria-label="SearchTrip"
              />
              <a onClick={(e) => {e.preventDefault(); clearSearchTerms();}}>
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
            <i className={"bi bi-link-45deg text-black me-2 " + (isLoading? 'd-none':'')}></i>
            { "แชร์ทริป" + (inputText.length>0? ` '${inputText}'`:'ทั้งหมด') }
            <Spinner animation="border" variant="secondary" size="sm" className={isLoading? '':'d-none'} />
          </Button>
        </Col>
      </Row>

      {/* toast */}
      <ToastComponent status={true} message='Link copied!' stylesClass={showToast? '':'d-none'} />
    </React.Fragment>
  )
}

export default SearchTripComponent;