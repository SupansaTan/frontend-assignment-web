import React, { useState } from 'react';
import { Form } from 'react-bootstrap';

function SearchTripComponent() {
  const [searchTerms, setSearchTerms] = useState('')

  return(
    <React.Fragment>
      <Form.Control
        type="search"
        defaultValue={searchTerms}
        onChange={(e) => {setSearchTerms(e.target.value)}}
        placeholder="Search"
        id="search_terms"
        className="my-4 border-0 border-bottom rounded-0 shadow-none"
        aria-label="SearchTrip"
      />
    </React.Fragment>
  )
}

export default SearchTripComponent;