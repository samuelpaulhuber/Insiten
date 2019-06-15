import React from 'react';

class ViewTargets extends React.Component {
  constructor(props) { //<----Method
    super(props);
    this.state = { //<----Initialize state
      data: [
        {
          id: 1,
          name: 'Test Target',
          status: 'Pending',
          address1: '234 Ackwood Circle',
          address2: null,
          city: 'Pharon',
          state: 'TN',
          contacts: [{
            contactName: 'Bob Smith',
            contactPhone: '1234567890',
            contactAddress1: '1133 Valley Drive',
            contactAddress2: null,
            contactCity: 'Fun',
            contactState: 'CA',
            facts: ['loves to ski', 'hates beaches']
          }],
          yearlyRevenue: [{
            year: 2015,
            grossRevenue: 1263380,
            profit: 579888
          }]
        }
      ]
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) { //<---- Method/Set State
    this.setState({ value: event.target.value });
  }

  render() {
    // let styles = {
    //   textAlign: 'center'
    // }
    return (
      <div></div>
    );
  }
}
export default ViewTargets;
