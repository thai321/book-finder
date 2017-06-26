import React, { Component } from 'react';
import { FormGroup, FormControl, InputGroup, Glyphicon } from 'react-bootstrap';
import '../styles/index.css';

import Gallery from './gallery';


class Global extends Component {
  constructor(props) {
    super(props);

    this.state = {
      query: '',
      items: []
    }
  }

  setQuery(event) {
    this.setState({query: event.target.value});
  }
  clickEnter(event) {
    if (event.key === 'Enter') {
      // console.log('query is ', this.state.query);
      this.search();
    }
  }

  search() {
    if (this.state.query) {
      const BASE_URL = 'https://www.googleapis.com/books/v1/volumes?q=';
      // console.log("Search", this.state.query);
      fetch(
        `${BASE_URL}${this.state.query}`,
        {method: 'GET'}
      )
      .then(response => response.json())
      // .then(json => console.log(json));
      .then(json => {
        console.log("json = ", json);
        let { items } = json; // items = json.items
        this.setState({items});
      });
    }
  }

  render() {
    return (
      <div className="global">
        <h2>Book Explorer!</h2>
        <FormGroup>
          <InputGroup>
            <FormControl
              type="text"
              placeholder="Search for a book"
              onChange={ (event) => this.setQuery(event) }
              onKeyPress={ (event) => this.clickEnter(event) }
              />
            <InputGroup.Addon onClick={ () => this.search() } className="cursor">
              <Glyphicon glyph="search"></Glyphicon>
            </InputGroup.Addon>
          </InputGroup>
        </FormGroup>
        <Gallery items={this.state.items} />
      </div>
    );
  }
}

export default Global;
