import React, { Component } from 'react';
import { View, Text } from 'react-native';

class App extends Component {
  state = {
    data: new Date()
  }
  render() {
    return (
      <View>
        <Text>Data e hora local:</Text>
        <Text>{this.state.data.toLocaleDateString()}</Text>
      </View>
    )
  }
}
export default App;

