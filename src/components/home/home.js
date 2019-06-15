import React from 'react';

class Home extends React.Component {
  constructor(props) { //<----Method
    super(props);
    this.state = { //<----Initialize state
      value: ""
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) { //<---- Method/Set State
    this.setState({ value: event.target.value });
  }

  render() {
    let styles = {
      textAlign: 'center'
    }
    return (
      <div style={styles}>
        <h1>Welcome to Target Tracker</h1>
      </div>
    );
  }
}
export default Home;
