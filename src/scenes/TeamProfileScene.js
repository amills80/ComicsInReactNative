import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';

class TeamProfileScene extends Component{

  render() {
    return(
      <View style={styles.container}>
        <Text style={styles.text}>Profile Scene</Text>
      </View>
    )
  }

}

const styles = StyleSheet.create({
  container:{
    flex:1,
    justifyContent: 'center',
  },
  text:{
    color:'red'
  }
})

export default TeamProfileScene;
