import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import { Header, Icon, List } from 'semantic-ui-react';

class App extends Component {
  state = {
    values: []
  }

  componentDidMount() {
    axios.get('http://localhost:5000/api/values')
      .then((response) => {
        this.setState({
          values: response.data
        });
      });
  }

  render() {
    return (
      <div>
          <Header as="h2">
            <Icon name="help" />
            <Header.Content>VERNUM Delivery Tracker</Header.Content>
          </Header>
          <List>
            {this.state.values.map((v: any) => {
              return <List.Item key={v.id}> {v.name} </List.Item>
            })}  
          </List>
      </div>
    );
  }
  
}

export default App;