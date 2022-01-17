import React, { useEffect, useContext } from 'react';
import { Row } from 'react-bootstrap';
import Typewriter from 'typewriter-effect';
import SearchTripComponent from './search-trip/search-trip';
import TripCardComponent from './trip-card/trip-card';
import { SearchTextContext } from '../../context/search-text';
import { useTitle } from '../../useTitle';
import { useNavigate } from "react-router-dom"
import { useSearchParams } from 'react-router-dom';
import './index.scss';

function HomePage() {
  const [searchParams] = useSearchParams()
  const {searchText, changeSearchText} = useContext(SearchTextContext)
  const navigate = useNavigate()
  useTitle("เที่ยวไหนดี")

  useEffect(() => {
    // when url has search keyword
    const keyword = searchParams.get("q");
    if(keyword) {
      changeSearchText(keyword);
    }
  }, [searchParams])

  useEffect(() => {
    // set keyword on url when submit search
    const setUrlParams = () => {
      const params = new URLSearchParams()
      if (searchText) {
        params.append("q", searchText)
      }
      else {
        params.delete("q")
      }
      navigate({search: params.toString()})
    }

    setUrlParams()
  }, [searchText])

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

        <SearchTripComponent />
        <TripCardComponent />
      </Row>
    </React.Fragment>
  )
}

export default HomePage;