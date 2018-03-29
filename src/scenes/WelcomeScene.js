import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Button from 'react-native-button';
//Actions is provided by the router for dynamic routing
import { Actions as RouteActions} from 'react-native-router-flux';

/*
 * TODO Step 2:
 *
 * 1. Create WelcomeScene class with render method.
 * 2. Add View render with the container styles.
 * 3. Add Text that says "WelcomeScene" inside of the View
 * 4. Add Button component with onPress action handler
 * 5. Add RouteActions.tabbar to our button to route to our next scene
 */

class WelcomeScene extends Component{
  render (){
    return (
      <View style ={styles.container}/>
        <Text style={styles.text}/>
        Welcome Scene
        </Text>
        <Button style={styles.button} onPress={RoutesActions.tabbar}>Get Started</Button>
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
  },
  button: {
    color:'blue',
  }
})



export default WelcomeScene;
