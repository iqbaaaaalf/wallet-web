import React, { Component }from 'react';


export default class Homepage extends Component{
  constructor(props) {
    super(props);
    this.state = {
      name: '',
    };
  }

  render() {
    return (
        <div>
          <h1 className="Welcome">Hello,{this.state.name}</h1>
          <RecentTransaction />
        </div>
    );
  }
}
