import React from 'react';
import FilterQuery from './FilterQuery';

export default class Filter extends React.Component {
  constructor() {
    super();

    this.state = {
      query: '',
    };
    this.updateQuery = this.updateQuery.bind(this);
  }

  updateQuery(query) {
    this.setState({
      query: query,
    });
  }

  render() {
    return (
        <div>
          <FilterQuery onChange={this.updateQuery} value={this.state.query}/>
        </div>
    );
  }
}