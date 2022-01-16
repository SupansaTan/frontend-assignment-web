import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import Typewriter from 'typewriter-effect';
import { SearchTermsProvider } from '../../context/search-terms';
import SearchTripComponent from './search-trip/search-trip';
import TripCardComponent from './trip-card/trip-card';
import { useTitle } from '../../useTitle';
import { useNavigate } from "react-router-dom"
import { useSearchParams } from 'react-router-dom';
import './index.scss';

function HomePage() {
  const [searchParams] = useSearchParams()
  const [searchText, setSearchText]  = useState<string>('')
  const navigate = useNavigate()
  useTitle("เที่ยวไหนดี")

  useEffect(() => {
    const keyword = searchParams.get("q");
    if(keyword) {
      setSearchText(keyword);
    }
  }, [searchParams])

  useEffect(() => {
    setUrlParams();
  }, [searchText])

  const changeSearchText = (inputText: string) => {
    setSearchText(inputText);
  }

  const setUrlParams = () => {
    const params = new URLSearchParams()
    if (searchText) {
      params.append("q", searchText)
    } else {
      params.delete("q")
    }
    navigate({search: params.toString()})
  }

  return(
    <React.Fragment>
      <Row>
        <Typewriter
          options={{
            strings: 'เที่ยวไหนดี',
            autoStart: true,
            delay: 75,
          }}
        />

        <SearchTermsProvider>
          <SearchTripComponent searchText={searchText} onSearch={changeSearchText} />
          <TripCardComponent searchTerms={searchText} onClickTag={changeSearchText}/>
        </SearchTermsProvider>
      </Row>
    </React.Fragment>
  )
}

export default HomePage;