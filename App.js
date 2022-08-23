import React, { Component } from 'react';
import { View, Text } from 'react-native';

class App extends Component {
  state = {
    data: new Date()
  }
  componentDidMount() {
    setInterval(() => {
      this.setState({
        data: new Date()
      })
    }, 1000);
  }
  render() {
    return (
      <View>
        <Text>Data e hora local:</Text>
        <Text>{this.state.data.toLocaleTimeString()}</Text>
      </View>
    )
  }
}
export default App;

