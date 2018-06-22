import React from 'react'
import { Font, AppLoading } from 'expo'
import { Text, View, StyleSheet } from 'react-native';
import  { MaterialIcons } from '@expo/vector-icons'
import { Icon } from 'react-native-elements'

export default class NativeApp extends React.Component {
  constructor() {
    super()
    this.state = {
      fontsAreLoaded: false
    }
  }
  async componentWillMount() {
    // change Material Icons to MaterialIcons to add error
    await Font.loadAsync({ 'MaterialIcons': require('@expo/vector-icons/fonts/MaterialIcons.ttf') })
    this.setState({ fontsAreLoaded: true })
  }
  render() {
    const { fontsAreLoaded } = this.state
    return !fontsAreLoaded ? 
         <AppLoading /> :
   <HybridApp /> 

  }
}

export class HybridApp extends React.Component {
 render() {
   return (
    <Icon 
    type = 'material-icons'
    name = 'accessibility'
    containerStyle = {{top: 50}}
    />
    )
 }
}

