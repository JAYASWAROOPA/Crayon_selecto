// Counter.js
import React from 'react';
import { connect } from 'react-redux';
import { View, Text } from 'react-native';

const Counter = ({ count }) => (
  <View>
    <Text>Count: {count}</Text>
  </View>
);

const mapStateToProps = (state) => ({
  count: state.count, 
});

export default connect(mapStateToProps)(Counter);
